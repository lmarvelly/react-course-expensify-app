import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => 
(
	<div>
		<h3>{ description } </h3>
		<p>{ amount } - { createdAt } </p>
	</div>
);

// props.expenses.map()

export default ExpenseListItem;