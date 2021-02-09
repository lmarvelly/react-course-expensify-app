import { createStore } from 'redux';
// Simple example to show how actions work

// createStore takes in two arguments: state and action
const store = createStore((state = { count: 0 }, action) => 
{
	// // if action.type === 'INCREMENT'
	// if (action.type === 'INCREMENT')
	// {
	// 	return {
	// 		count: state.count + 1
	// 	};
	// }
	// if (action.type === 'DECREMENT')
	// {
	// 	return {
	// 		count: state.count - 1
	// 	};
	// }
	// if (action.type === 'RESET')
	// {
	// 	return {
	// 		count: 0
	// 	};
	// }
	// else
	// {
	// 	return state;
	// }

	// The above is equivelant to
	switch (action.type)
	{
		// each case returns a new object
		case 'INCREMENT':
			return {
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				count: state.count - 1
			};
		case 'RESET':
			return {
				count: 0
			}
		default:
			return state;
	}
});

// Prints out the state every time it is changed
store.subscribe(() => 
{
	console.log(store.getState());
});

/**
 * Action Object
 * 
 * Redux convention to use CAPITALS for actions (words seperated by 
 * underscores)
 * 
 * dispatch() method sends the action type to the store
 */
store.dispatch
({
	type: 'INCREMENT' // action object { type: 'INCREMENT' }
});
store.dispatch
({
	type: 'INCREMENT'
});
store.dispatch
({
	type: 'RESET'
});
store.dispatch
({
	type: 'DECREMENT'
});