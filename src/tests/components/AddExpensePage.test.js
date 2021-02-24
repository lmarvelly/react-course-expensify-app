import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AppExpensePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

// Defines components each time before tests are run
beforeEach(() => 
{
	addExpense = jest.fn(); // spy
	history = { push: jest.fn() };
	wrapper = 
	shallow(
		<AddExpensePage 
			addExpense={ addExpense }
			history={ history } 
		/>
	);
})

test('should render AddExpensePage correctly', () =>
{
	expect(wrapper).toMatchSnapshot();
});

test('should render onSubmit', () =>
{
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});