import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

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
			filters: filtersReducer
		}),

		composeEnhancers(applyMiddleware(thunk))
		// For Chrome/Firefox redux extension
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};