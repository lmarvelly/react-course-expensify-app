import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

/**
 * @function ExpenseListFilters
 * 
 * @param {*} props 
 * 
 * @e This is the event target. 
 */
const ExpenseListFilters = (props) =>
(
	<div>
		<input 
			type='text' 
			value={ props.filters.text }
			onChange={(e) =>
			{
				props.dispatch(setTextFilter(e.target.value));
			}}
		/>
		<select
			// This is what's called a Controlled Component. We want to use these a lot as the app gets bigger.
			value={ props.filters.sortBy }

			// onChange={(e) => 
			// {
			// 	if(e.target.value === 'date')
			// 	{
			// 		props.dispatch(sortByDate());
			// 	}
			// 	else if(e.target.value === 'amount')
			// 	{
			// 		props.dispatch(sortByAmount());
			// 	}
			// }}
			
			// My solution
			onChange={(e) =>
			{
				switch (e.target.value) {
					case 'date':
						props.dispatch(sortByDate());
						break;
					case 'amount':
						props.dispatch(sortByAmount());
						break;
				}
			}}
		>
			<option value='date'>Date</option>
			<option value='amount'>Amount</option>
		</select>
	</div>
);

const mapStateToProps = (state) =>
{
	return {
		filters: state.filters
	}
};

export default connect(mapStateToProps)(ExpenseListFilters);