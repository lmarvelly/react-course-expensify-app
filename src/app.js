import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensers';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 1000000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 100, createdAt: 1500000 }));
store.dispatch(setTextFilter('water'));

setTimeout(() =>
{
	store.dispatch(setTextFilter('gas'));
}, 2000);

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