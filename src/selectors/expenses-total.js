import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export default (expenses) => 
{
	return expenses
		.map((expense) => expense.amount)
		.reduce((sum, value) => sum + value, 0);
};

