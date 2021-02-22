import React from 'react';
import { Link } from 'react-router-dom'

// If we want to see note then we add it as an argument and then you can add it to the paragraph: { note }
export const ExpenseListItem = ({ id, description, amount, createdAt }) => 
(
	<div>
		<Link to={ `/edit/${id}` }><h3>{ description } </h3></Link>

		<p>{ amount } - { createdAt }</p>
	</div>
);	

export default ExpenseListItem;