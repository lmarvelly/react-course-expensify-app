// Have third party's at the top
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage'

const store = configureStore();

/**
 * Provider provides the store to all of our Components
 * 
 * Provider requires one argument which is the store
 */
const jsx = (
	<Provider store={ store }>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () =>
{
	if (!hasRendered)
	{
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// This will run every time the state is changed
firebase.auth().onAuthStateChanged((user) =>
{
	if (user)
	{
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() =>
		{
			renderApp();
			if (history.location.pathname === '/')
			{
				history.push('/dashboard');
			}
		});
	}
	else
	{
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
