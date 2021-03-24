import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';  // You can change the currency http://numeraljs.com/#locales

// require("numeral/locales/en-gb");

// If we want to see note then we add it as an argument and then you can add it to the paragraph: { note }
export const ExpenseListItem = ({ id, description, amount, createdAt }) => 
(
	<Link className="list-item" to={ `/edit/${id}` }>
		<div>
			<h3 className="list-item__title">{ description } </h3>
			<span className="list-item__sub-title">{ moment( createdAt ).format('MMMM Do, YYYY') }</span>
		</div>
		<h3 className="list-item__data">{ numeral( amount / 100 ).format('$0,0.00') }</h3>
	</Link>
);	

export default ExpenseListItem;