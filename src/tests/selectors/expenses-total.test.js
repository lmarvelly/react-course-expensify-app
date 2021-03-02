import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () =>
{
	const result = selectExpensesTotal([]);

	expect(result).toBe(0);
});

test('should return the amount of a single expense. 195 in this case', () =>
{
	const result = selectExpensesTotal([expenses[0]]);

	expect(result).toBe(195);
});

test('should return the total amount of multiple expenses. In this case 24195', () =>
{
	const result = selectExpensesTotal(expenses);

	expect(result).toBe(24195);
});