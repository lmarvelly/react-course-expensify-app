import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log('test');

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

ReactDOM.render(jsx, document.getElementById('app'));