import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expensers';
import ExpenseForm from './ExpenseForm';


export class EditExpensePage extends React.Component
{
	onSubmit = (expense) => 
	{
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};
	onRemove = () =>
	{
		this.props.removeExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	}
	render()
	{
		return(
			<div>
				<ExpenseForm
					expense={ this.props.expense }
					onSubmit={ this.onSubmit }
				/>
				<button onClick={ this.onRemove }>Remove</button>
			</div>
		);
	}
}

// maps the Store state to the component props when passed into connect() 
// We need this to access the expense we want to edit. It returns the expense we need
const mapStateToProps = (state, props) =>
({
	/**
	 * props.match.params.id: the id that was passed in when 
	 * linking this page from the dashboard.
	 * When the above id matches an expense id, that expense will 
	 * be returned
	 */
	expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) =>
({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);