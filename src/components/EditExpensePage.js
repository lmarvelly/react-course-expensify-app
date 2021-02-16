import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
	console.log(props);
	return(
		<div>
			Editing the expense with id of {props.match.params.id}
		</div>
	);
};

// maps the Store state to the component props when passed into connect() 
// We need this to access the expense we want to edit. It returns the expense we need
const mapStateToProps = (state, props) =>
{
	return {
		// Check current objects props id and checks it against
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditExpensePage);