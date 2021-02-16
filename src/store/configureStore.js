import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/**
 * @export configurationStore
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
		// For Chrome/Firefox redux extension
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};