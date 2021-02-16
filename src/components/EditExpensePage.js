import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expensers';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
	return(
		<div>
			<ExpenseForm
				expense={ props.expense }
				onSubmit={(expense) => 
				{
					// console.log("id: ", props.expense.id, 'description: ', expense.description);
					// the id is also available at match.params.id
					props.dispatch(editExpense(props.expense.id, expense));
					console.log('updated', expense);
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => 
				{
					console.log('removed: ', props.expense.id);
					props.dispatch(removeExpense({ id: props.expense.id }));
					props.history.push('/');
				}}
			>
				Remove
			</button>
		</div>
	);
};

// maps the Store state to the component props when passed into connect() 
// We need this to access the expense we want to edit. It returns the expense we need
const mapStateToProps = (state, props) =>
{
	return {
		/**
		 * props.match.params.id: the id that was passed in when 
		 * linking this page from the dashboard.
		 * When the above id matches an expense id, that expense will 
		 * be returned
		 */
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditExpensePage);