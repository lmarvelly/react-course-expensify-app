import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense } from './actions/expensers';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 1000000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 111500000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 20000, createdAt: 1250000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

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