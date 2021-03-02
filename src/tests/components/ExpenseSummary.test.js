import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

// test('should generate an expense totaling £46.95', () =>
// {
// 	const wrapper = shallow(<ExpenseSummary expenses={ [] } />);
// 	expect(wrapper).toMatchSnapshot();
// });

test('should generate an expense totaling $195.00', () =>
{
	// Shallow render JSX
	const wrapper = shallow(<ExpenseSummary expenseCount={ 1 } expensesTotal={ 235 } />);
	expect(wrapper).toMatchSnapshot();
});

test('should generate an expense totaling £46.95', () =>
{
	const wrapper = shallow(<ExpenseSummary expenseCount={ 5 } expensesTotal={ 2523 } />);
	expect(wrapper).toMatchSnapshot();
});