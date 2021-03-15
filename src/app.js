import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expensers';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

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

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// This will run every time the state is changed
firebase.auth().onAuthStateChanged((user) =>
{
	if (user)
	{

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
		renderApp();
		history.push('/');
	}
});
