import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expensers';
import ExpenseForm from './ExpenseForm';


export class EditExpensePage extends React.Component
{
	onSubmit = (expense) => 
	{
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};
	onRemove = () =>
	{
		this.props.startRemoveExpense({ id: this.props.expense.id });
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
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);