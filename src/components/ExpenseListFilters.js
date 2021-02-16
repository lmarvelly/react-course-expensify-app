import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component
{
	state =
	{
		calenderFocused: null
	};
	onDatesChange = ({ startDate, endDate }) =>
	{
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = (calenderFocused) =>
	{
		this.setState(() => ({ calenderFocused }));
	};
	render()
	{
		return (
			<div>
				<input 
					type='text' 
					value={ this.props.filters.text }
					onChange={(e) =>
					{
						this.props.dispatch(setTextFilter(e.target.value));
					}}
				/>
				<select
					// This is what's called a Controlled Component. We want to use these a lot as the app gets bigger.
					value={ this.props.filters.sortBy }
		
					// onChange={(e) => 
					// {
					// 	if(e.target.value === 'date')
					// 	{
					// 		this.props.dispatch(sortByDate());
					// 	}
					// 	else if(e.target.value === 'amount')
					// 	{
					// 		this.props.dispatch(sortByAmount());
					// 	}
					// }}
					
					// My solution
					onChange={(e) =>
					{
						switch (e.target.value) {
							case 'date':
								this.props.dispatch(sortByDate());
								break;
							case 'amount':
								this.props.dispatch(sortByAmount());
								break;
						}
					}}
				>
					<option value='date'>Date</option>
					<option value='amount'>Amount</option>
				</select>
				<DateRangePicker
					startDate={ this.props.filters.startDate }
					endDate={ this.props.filters.endDate }
					onDatesChange={ this.onDatesChange }
					focusedInput={ this.state.calenderFocused }
					onFocusChange={ this.onFocusChange }
					showClearDates={ true }
					numberOfMonths={ 1 }
					isOutsideRange={ () => false }
				/>
			</div>
		)
	}
}

/**
 * @function ExpenseListFilters
 * 
 * @param {*} props 
 * 
 * @e This is the event target. 
 */


const mapStateToProps = (state) =>
{
	return {
		filters: state.filters
	}
};

export default connect(mapStateToProps)(ExpenseListFilters);