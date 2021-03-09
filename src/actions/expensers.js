import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../reducers/expenses';

/**
 * @function addExpense 
 * 
 * @param ADD_EXPENSE type: 'ADD_EXPENSE'
 * @param {*} param0 default expense values
 */
export const addExpense = (expense) => (
{
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => 
{
	return (dispatch) => {
		const {
			// expense object default values
			description = '', 
			note = '', 
			amount = 0, 
			createdAt = 0
		} = expenseData;

		const expense = { description, note, amount, createdAt };

		return database.ref('expenses').push(expense).then((ref) =>
		{
			dispatch(addExpense(
			{
				id: ref.key,
				...expense
			}));
		});
	};
};

/**
 * @constant removeExpense
 * 
 * @param id this is the id pulled out of an expense. We can do this 
 * because we deconstructed it
 */
export const removeExpense = ({ id } = {}) => (
{
	type: 'REMOVE_EXPENSE',
	id
});

/**
 * @constant editExpense
 */
export const editExpense = (id, updates) => (
{
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// Set_Expenses
export const setExpenses = (expenses) =>
({
	type: 'SET_EXPENSES',
	expenses
});

export const startSetExpenses = () =>
{
	// const expenses = database.ref('expenses')
	// 	.once('value')
		// .then((snapshot) =>
		// {

		// });

	// console.log(expenses);

	return (dispatch) =>
	{
		return database.ref('expenses')
			.once('value')
			.then((snapshot) =>
			{
				const expenses = [];

				snapshot.forEach((childSnapshot) => 
				{
					expenses.push(
					{
						id: childSnapshot.key,
						...childSnapshot.val()
					});
				});

				dispatch(setExpenses(expenses));
			});

			
	};
};
