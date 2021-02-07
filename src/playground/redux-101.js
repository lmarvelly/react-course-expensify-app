// The redux store is the thing that tracks the data over time
import { createStore } from 'redux';

/**
 * @constant store
 * @description We've set it up with two arguments. 
 * The first argument is the that state of the store. 
 * The second argument is the action to be taken by the store. i.e
 * the action.type which in this case can be INCREMENT, DECREMENT
 * or RESET. 
 * When we use the SWITCH block to change the state of the store.
 * When we change the state we don't change it directly. Instead we 
 * compute the new state using the previous state. Editing the state
 * directly is a BAD idea.
 * 
 * @argument INCREMENT
 * 
 * We use the ternary operator to deterning if a 'number' has 
 * been passed in. If so we increment by that number. If not
 * then we use the default increment of 1
 * 
 * typeof returns a string representing the type of operand .
 * In this case we're looking for 'number'
 * 
 * @argument DECREMENT
 * Opposite of INCREMENT but works the same way
 * 
 * @argument RESET
 * Resets the count to zero
 * 
 * @argument SET
 * Sets the count to whatever is passed into count
 * 
 * @default state returns state
 * if action.type is not equal to increment then it means 
 * this is the first time this is being run so we return the default 
 * 
 */
const store = createStore((state = { count: 0 }, action) => 
{
	switch (action.type)
	{
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: state.count + incrementBy
			};
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy
			};
		case 'SET':
			return {
				count: action.count
			}
		case 'RESET':
			return {
				count: 0
			};
		default:
			return state;
	}
});

// subscribe watches for changes in Rudux's store
// call unsubscribe() to unsubscribe from changes. The changes are 
// still taking effect but we're just not being logged
const unsubscribe = store.subscribe(() =>
{
	// logs everytime something changes to the store
	console.log(store.getState());
});


// Actions - that an object that gets sent to the store
// Below we're dispatching actions that change the dedux store state.

/**
 * convention for Redux to write in capitals with underscores to
 * seperate words
 */

// Increment count
store.dispatch(
{
	type: 'INCREMENT',
	incrementBy: 5
});

store.dispatch(
{
	type: 'INCREMENT'
});

// Reset the count to zero 
store.dispatch
({
	type: 'RESET'
});

// Decrement count
store.dispatch(
{
	type: 'DECREMENT'
});

store.dispatch(
{
	type: 'DECREMENT',
	decrementBy: 10
});

store.dispatch(
{
	type: 'SET',
	count: 101
});