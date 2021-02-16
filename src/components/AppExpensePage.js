import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensers'

const AddExpensePage = (props) =>
(
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm
			onSubmit={(expense) => 
			{
				props.dispatch(addExpense(expense));
				props.history.push('/'); // redirect to dashboard
			}}
		/>
	</div>
);

export default connect()(AddExpensePage); // 