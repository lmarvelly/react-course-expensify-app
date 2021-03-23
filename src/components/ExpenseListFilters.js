import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

/**
 * @class ExpenseListFilters
 * 
 * @e This is the event target. 
 */
export class ExpenseListFilters extends React.Component
{
	state =
	{
		calendarFocused: null
	};
	onDatesChange = ({ startDate, endDate }) =>
	{
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};						
	onFocusChange = (calendarFocused) =>
	{
		this.setState(() => ({ calendarFocused }));
	};
	onTextChange = (e) =>
	{
		this.props.setTextFilter(e.target.value);
	}
	onSortChange = (e) =>
	{
		// My solution
		switch (e.target.value) {
			case 'date':
				this.props.sortByDate();
				break;
			case 'amount':
				this.props.sortByAmount();
				break;
		}
		// original solution
		// if(e.target.value === 'date')
		// {
		// 	this.props.sortByDate();
		// }
		// else if(e.target.value === 'amount')
		// {
		// 	this.props.sortByAmount();
		// }
	}
	render()
	{
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input 
							type='text' 
							value={ this.props.filters.text }
							onChange={ this.onTextChange }
						/>
					</div>
					<div className="input-group__item">
						<select
							// This is what's called a Controlled Component. We want to use these a lot as the app gets bigger.
							value={ this.props.filters.sortBy }
							onChange={ this.onSortChange }
						>
							<option value='date'>Date</option>
							<option value='amount'>Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={ this.props.filters.startDate }
							endDate={ this.props.filters.endDate }
							onDatesChange={ this.onDatesChange }
							focusedInput={ this.state.calendarFocused }
							onFocusChange={ this.onFocusChange }
							showClearDates={ true }
							numberOfMonths={ 1 }
							isOutsideRange={ () => false }
						/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) =>
({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) =>
({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);