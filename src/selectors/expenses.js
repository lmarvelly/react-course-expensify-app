/**
 * @function getVisibleExpenses
 * @description Get Visible Expenses
 * @argument expenses
 * @argument {*} filters we destructre the second argument which is 
 * filters
 */
export default (expenses, { text, sortBy, startDate, endDate }) => 
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
