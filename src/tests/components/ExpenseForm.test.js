import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () =>
{
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () =>
{
	const wrapper = shallow(<ExpenseForm expense={ expenses[2] } />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () =>
{
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', 
	{
		preventDefault: () => {} // to prevent 'TypeError: Cannot read property 'preventDefault' of undefined' 
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () =>
{
	const value = 'New Description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', 
	{
		target: { value }
	});
	expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () =>
{
	const value = 'New Note';
	const wrapper = shallow(<ExpenseForm />);
	// Don't need at() because there's only one
	wrapper.find('textarea').simulate('change',
	{
		target: { value }
	});
	expect(wrapper.state('note')).toBe(value);
});

test('should set amount of valid input', () =>
{
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change',
	{
		target: { value }
	});
	expect(wrapper.state('amount')).toBe(value);
});

test('shouldn\'t set amount of invalid input', () =>
{
	const value = '12.122';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change',
	{
		target: { value }
	});
	expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () =>
{
	const expense = expenses[0];
	const onSubmitSpy = jest.fn();
	const wrapper = 
	shallow(
		<ExpenseForm 
			expense={ expense } 
			onSubmit={ onSubmitSpy } 
		/>
	);
	wrapper.find('form').simulate('submit', 
	{
		preventDefault: () => { }
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith(
	{
		description: expense.description,
		amount: expense.amount,
		note: expense.note,
		createdAt: expense.createdAt
	});
});

test('should set new change on date change', () =>
{
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () =>
{
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused }); // need to pass in an object
	expect(wrapper.state('calenderFocused')).toBe(focused);
});