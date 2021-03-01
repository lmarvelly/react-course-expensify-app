import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';  // You can change the currency http://numeraljs.com/#locales

// require("numeral/locales/en-gb");

// If we want to see note then we add it as an argument and then you can add it to the paragraph: { note }
export const ExpenseListItem = ({ id, description, amount, createdAt }) => 
(
	<div>
		<Link to={ `/edit/${id}` }><h3>{ description } </h3></Link>

		<p>
			{ numeral( amount / 100 ).format('$0,0.00') }
			- 
			{ moment( createdAt ).format('MMMM Do, YYYY') }
		</p>
	</div>
);	

export default ExpenseListItem;