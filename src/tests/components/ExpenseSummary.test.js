import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

// test('should generate an expense totaling £46.95', () =>
// {
// 	const wrapper = shallow(<ExpenseSummary expenses={ [] } />);
// 	expect(wrapper).toMatchSnapshot();
// });

test('should generate an expense totaling $2.35', () =>
{
	// Shallow render JSX
	const wrapper = shallow(<ExpensesSummary expenseCount={ 1 } expensesTotal={ 235 } />);
	expect(wrapper).toMatchSnapshot();
});

test('should generate an expense totaling $25.23', () =>
{
	const wrapper = shallow(<ExpensesSummary expenseCount={ 5 } expensesTotal={ 2523 } />);
	expect(wrapper).toMatchSnapshot();
});