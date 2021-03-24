import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();

export default class ExpenseForm extends React.Component
{	
	constructor(props)
	{
		super(props);

		// Sets up the default state if it's a new expense or sets 
		// up current values for editing expense
		this.state = 
		{
			// if an expense exists
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			note: props.expense ? props.expense.note : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ''
		}
	}
	
	onDescriptionChange = (e) =>
	{
		const description = e.target.value;
		this.setState(() => ({ description }));
	}
	onAmountChange = (e) =>
	{
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
		{
			this.setState(() => ({ amount }));
		}
	}
	onDateChange = (createdAt) =>
	{
		if (createdAt) // If statement is needed to prevent user from deleting date
		{
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusChange = ({ focused }) =>
	{
		this.setState(() => ({ calendarFocused: focused }));
	};
	onNoteChange = (e) =>
	{
		const note = e.target.value;
		this.setState(() => ({ note }));
	}
	onSubmit = (e) =>
	{
		e.preventDefault(); // prevent full page reload

		if (!this.state.description || !this.state.amount)
		{
			this.setState(() => ({ error: 'Please provide description and amount.' }));
		}
		else
		{
			this.setState(() => ({ error: ''}));
			// onSubmit gets passed down by the AddExpensePage
			this.props.onSubmit(
			{
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	}
	render()
	{
		return (
			<form className="form" onSubmit={ this.onSubmit }>
				{ this.state.error && <p className="form__error">{ this.state.error }</p>}
				<input
					type='text'
					placeholder='Description'
					autoFocus
					className="text-input"
					value={ this.state.description }
					onChange={ this.onDescriptionChange }
				/>
				<input
					type='text'
					placeholder='Amount'
					className="text-input"
					value={ this.state.amount }
					onChange={ this.onAmountChange }
				/>
				<SingleDatePicker 
					date={ this.state.createdAt }
					onDateChange={ this.onDateChange }
					focused= { this.state.calendarFocused }
					onFocusChange={ this.onFocusChange }
					numberOfMonths={ 1 }
					isOutsideRange={ () => false } // makes everysingle day in future and past available
					displayFormat="DD/MM/YYYY" // UK date format
				/>
				<textarea
					placeholder='Add a note for your expense (optional)'
					className="textarea"
					value={ this.state.note }
					onChange={ this.onNoteChange }
				></textarea>
				
				<div>
					<button className="button">Save Expense</button>
				</div>
			</form>
		)
	}
}