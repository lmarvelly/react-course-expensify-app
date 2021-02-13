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
export default (state = expensesReducerDefaultState, action) =>
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
