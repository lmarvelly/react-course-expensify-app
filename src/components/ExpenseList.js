import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// ExpenseList didn't need anything passed down because we imported
// and used connect()
export const ExpenseList = (props) => (
	<div>
		{
			props.expenses.length === 0 ? 
			(
				<p></p>
			)
			:
			(
				props.expenses.map((expense) => 
			{
				return <ExpenseListItem key={ expense.id } { ...expense } />
			})
			)
		}
	</div>
);

// Function that maps the Store state to the component props
const mapStateToProps = (state) =>
{
	return {
		expenses: selectExpenses( state.expenses, state.filters )
	};
};

// 
export default connect(mapStateToProps)(ExpenseList);