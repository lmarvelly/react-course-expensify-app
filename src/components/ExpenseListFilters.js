import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

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
	</div>
);

const mapStateToProps = (state) =>
{
	return {
		filters: state.filters
	}
};

export default connect(mapStateToProps)(ExpenseListFilters);