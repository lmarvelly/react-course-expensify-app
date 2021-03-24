import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// ExpenseList didn't need anything passed down because we imported
// and used connect()
export const ExpenseList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Expenses</div>
			<div className="show-for-desktop">Expense</div>
			<div className="show-for-desktop">Amount</div>
		</div>
		<div className="list-body">
			{
				props.expenses.length === 0 ? 
				(
					<div className="list-item list-item--message">
						<span>No expenses</span>
					</div>
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
	</div>
);

// Function that maps the Store state to the component props
const mapStateToProps = (state) =>
{
	return {
		expenses: selectExpenses( state.expenses, state.filters )
	};
};

export default connect(mapStateToProps)(ExpenseList);