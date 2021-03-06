// combineReducers is going to let us define multiple reducers that 
// define how are Redux application changes i.e multiple smaller
// functions that can be combined together
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; // generates universilally unique identifiers

/**
 * @constant addExpense 
 * 
 * @param ADD_EXPENSE type: 'ADD_EXPENSE'
 * @param {*} param0 default expense values
 */
const addExpense = (
	{ 
		// expense object default values
		description = '', 
		note = '', 
		amount = 0, 
		createdAt = 0 
	} = {}
) => (
{
	type: 'ADD_EXPENSE',
	expense:
	{
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

/**
 * @constant removeExpense
 * 
 * @param id this is the id pulled out of an expense. We can do this 
 * because we deconstructed it
 */
const removeExpense = ({ id } = {}) => (
{
	type: 'REMOVE_EXPENSE',
	id
});

/**
 * @constant editExpense
 */
const editExpense = (id, updates) => (
{
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => (
{
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
const sortByDate = () => (
{
	type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => (
{
	type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE. No need to do 'date = undefined' as this is the default
const setStartDate = (startDate) => (
{
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE. No need to do 'date = undefined' as this is the default
const setEndDate = (endDate) => (
{
	type: 'SET_END_DATE',
	endDate
});

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
 * 
 * @argument ADD_EXPENSE we use the spread operator because it 
 * creates a new array and we can add new items to the begining or 
 * end. We then return that array.
 * @argument ADD_EXPENSE Goes through each expense in state using 
 * filter. We first destructure each expense to get just the id if 
 * they're not equal (true) then they will be kept. if they are equal 
 * (false) then the object will be destroyed
 * @argument ADD_EXPENSE We use map to go through every single item 
 * in the expense array. 
 * If the id passed in (action.id) is a match 
 * for an id in the map (expense.id) then we want to return a new 
 * object expense which gets the original object spread (...expense)
 * and overrides with the changes passed in (...action.updates). 
 * Else, if expense id does not match, there will be no change to 
 * expense and the expense is returned
 */
const expensesReducer = (state = expensesReducerDefaultState, action) =>
{
	switch (action.type)
	{
		case 'ADD_EXPENSE':
			return [
				...state, // spread operater
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => 
			{
				if (expense.id === action.id)
				{
					return {
						...expense,
						...action.updates
					}
				}
				else
				{
					return expense;
				}
			});
		default:
			return state;
	}
};

/**
 * @constant filtersReducerDefaultState The default filter state
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
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default:
			return state;
	}
};


/**
 * @constant getVisibleExpenses
 * @description Get Visible Expenses
 * @argument expenses
 * @argument {*} filters we destructre the second argument which is 
 * filters
 */
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => 
{
	return expenses.filter((expense) => 
	{
		// if all of these return true then the item will be kept in 
		// the array. If any are false then they will be removed.
		//
		// startDateMatch logic checks to see if startDate is not a 
		// number. If it is not a number (undefined) the first block is
		// true and a filter was not set. 
		// If it's a number then a filter for the start date was set 
		// and the second block runs. This checks to see if it's 
		// greater or equal to the startDate filter. 
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		// endDateMatch is simular to startDateMatch except it checks 
		// to see if there's a end date filter and if it's less than 
		// that
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		// If there is a text filter it checks to see if the text matches
		// anything in the description. Both texts are converted to
		// lowercase making it case-insensitive
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => 
	// here we're customising the sort method to know what properties 
	// to sort by.
	{
		if (sortBy === 'date')
		{
			return a.createdAt < b.createdAt ? 1 : -1;
		}
		else if (sortBy === 'amount')
		{
			return a.amount < b.amount ? 1 : -1;
		}
	});
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
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const expenseThr = store.dispatch(addExpense({ description: 'Coffee', amount: 250, createdAt: -2000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('FFE'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate = 125
// store.dispatch(setStartDate()); // reset startDate = 0
// store.dispatch(setEndDate(999)); // endDate 1250

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
		createdAt: 0
	}],
	filters:
	{
		text: 'rent', // term to search by
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};
