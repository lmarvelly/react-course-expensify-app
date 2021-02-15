import React from 'react';

export default class ExpenseFrom extends React.Component
{
	render()
	{
		return (
			<div>
				<form>
					<input
						type='text'
						placeholder='Description'
						autoFocus

					/>
					<input
						type='number'
						placeholder='Amount'
					/>
				</form>
			</div>
		)
	}
}