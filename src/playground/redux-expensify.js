// combineReducers is going to let us define multiple reducers that 
// define how are Redux application changes i.e multiple smaller
// functions that can be combined together
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; // generates universilally unique identifiers

/**
 * @constant addExpense 
 * 
 *  ADD_EXPENSE
 * @param {*} param0 default expense values
 */
const addExpense = (
	{ 
		description = '', 
		note = '', 
		amount = 0, 
		createAt = 0 
	} = {}
) => (
{
	type: 'ADD_EXPENSE',
	expenses:
	{
		id: uuid,
		description,
		note,
		amount,
		createAt
	}
});

// REMOVE_EXPENSEY
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// expenses reducer's default state (duh)
const expensesReducerDefaultState = [];

/**
 * @constant expensesReducer 
 * 
 * @description expenses Reducer
 * 
 * @param {*} state default is an empty array as we will be starting
 * with no expenses
 * @param {*} action 
 */
const expensesReducer = (state = expensesReducerDefaultState, action) =>
{
	switch (action.type)
	{
		default:
			return state;
	}
};

/**
 * Default filter state
 */
const filtersReducerDefaultState = 
{
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

/**
 * @constant filtersReducer
 */
const filtersReducer = (state = filtersReducerDefaultState, action) =>
{
	switch (action.type)
	{
		default:
			return state;
	}
};


/**
 * @constant store
 * 
 * @function combineReducers is used to combine our two reducers.
 * expenses will be managed by expensesReducer.
 */
const store = createStore(
	combineReducers(
	{
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

// Whenever the state is changed it gets printed out
store.subscribe(() => 
{
	console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));

/**
 * @constant demoState a demo made to show how the expenses app will
 * eventually run
 * 
 * @description 
 * demoState: a list of objects managed by the expensesReducer
 * 
 * filters: filters for when searching through. Things can be sorted 
 * by date or a text value for example. Mana
 */
const demoState = 
{
	expenses: 
	[{
		id: 'qwerty',
		description: 'January Rent',
		note: 'This was the final payment for that address',
		amount: 35000, // using pennies to avoid errors when rounding or other calculations involving decimal places 
		createAt: 0
	}],
	filters:
	{
		text: 'rent', // term to search by
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};