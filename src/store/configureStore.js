// Good practice to have 3rd party imports first the have the projects after
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = 
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	||
	compose;

/**
 * @export configureStore
 * 
 * @function combineReducers is used to combine our two reducers.
 * expenses will be managed by expensesReducer.
 */
export default () => 
{
	const store = createStore(
		combineReducers(
		{
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer
		}),

		composeEnhancers(applyMiddleware(thunk))
		// For Chrome/Firefox redux extension
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};