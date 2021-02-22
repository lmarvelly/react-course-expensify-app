import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => 
{
	const state = expensesReducer(undefined, { type: '@@INIT' });

	expect(state).toEqual( [] );
});

test('should remove expense by id', () =>
{
	const action = 
	{
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual( [expenses[0], expenses[2]] );
});

test('should not remove expense if id is not found', () =>
{
	const action = 
	{
		type: 'REMOVE_EXPENSE',
		id: -1
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual( expenses );
});

test('should add an expense', () => 
{
	const expense =
	{
		id: '4',
		description: 'shopping',
		note: '',
		amount: 2000,
		createdAt: 100000
	}

	const action = 
	{ 
		type: 'ADD_EXPENSE', 
		expense 
	};
	const state = expensesReducer(expenses, action);

	// My solution
	// expect(state[3]).toEqual(expense);

	expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () =>
{
	const description = 'Water Bill';
	const action =
	{
		type: 'EDIT_EXPENSE',
		id: expenses[2].id,
		updates: { description }
	}
	const state = expensesReducer(expenses, action);

	expect(state[2].description).toBe( description );
});

test('should not edit expense if id not found', () =>
{
	const action = 
	{
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: { description: 'Edited expense' }
	}
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});