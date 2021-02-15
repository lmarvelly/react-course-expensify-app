import React from 'react';
import { connect } from 'react-redux';

// ExpenseList didn't need anything passed down because we imported
// and used connect()
const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{ props.filters.text }
		<br />
		{ props.expenses.length }
	</div>
);

// Function that maps the Store state to the component props
const mapStateToProps = (state) =>
{
	return {
		expenses: state.expenses,
		filters: state.filters
	};
};

// 
export default connect(mapStateToProps)(ExpenseList);