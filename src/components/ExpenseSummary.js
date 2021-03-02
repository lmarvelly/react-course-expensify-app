import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total'; 
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary = (props) =>
(
	<div>
		<p>Total expenses: { props.expenseTotal }</p>
		<p>Total spent: { numeral( props.expenses / 100 ).format('$0,0.00') }</p>
	</div>
);

const mapStateToProps = (state) =>
{
	return { 
		expenses: selectExpensesTotal( state.expenses ),
		expenseTotal: state.expenses.length
	}
}

export default connect(mapStateToProps)(ExpenseSummary);