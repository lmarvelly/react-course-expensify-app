import uuid from 'uuid';

/**
 * @function addExpense 
 * 
 * @param ADD_EXPENSE type: 'ADD_EXPENSE'
 * @param {*} param0 default expense values
 */
export const addExpense = (
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
