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
		})
	);

	return store;
};