// The redux store is the thing that tracks the data over time
import { createStore } from 'redux';

/** 
 * @constant incrementCount 
 * @description 
 * Takes in a number to increment by. If no value is given then it'll
 * get incremented by the default 1
 * 
 * @param incrementBy We deconstruct this object so it can be 
 * accessed directly.
 * If no object is provided then the default is going to be an empty
 * object. The function will try to destruct that empty object and 
 * give 1
 * 
 * @returns  
 * 
 */
const incrementCount = ({ incrementBy = 1 } = {}) => (
{
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => (
{
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => (
{
	type: 'RESET'
});

const setCount = ({count} = {}) => (
{
	type: 'SET',
	count
});

/** 
 * Reducers
 * 1. Reducers are pure functions
 * 	* The output is only determined by the input and they do not
 * 	effect anything outside of the function.
 * 	i.e the countReducer has params state and action and it 
 * 	returns a new state
 * 2. Never directly change state or action!!!
 * 	You should read off them returning a new state. 
 * 	Directly changing the state can have undesited effects
 */

/**
 * @constant countReducer
 * @description This is a reducer.
 * We've set it up with two arguments. 
 * The first argument is the that state of the store. 
 * The second argument is the action to be taken by the store. i.e
 * the action.type which in this case can be INCREMENT, DECREMENT
 * or RESET. 
 * When we use the SWITCH block to change the state of the store.
 * When we change the state we don't change it directly. Instead we 
 * compute the new state using the previous state. Editing the state
 * directly is a BAD idea.
 * Incidently this function is called a Reducer in the Redux library
 * 
 * @argument INCREMENT
 * Returns the old value + the amount that count is incremented by
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
 * @default state returns state if is the first time this is being run  
 * 
 */
const countReducer = (state = { count: 0 }, action) => 
{
	switch (action.type)
	{
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
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
};


const store = createStore(countReducer);

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

// Increment count. Writting it as seen below makes it hard to detect
// errors because it won't come up with a proper error if you misspell
// 'INCREMENT'
// store.dispatch(
// {
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 4 }));
store.dispatch(decrementCount());

/**
 * There should never be a time when setCount() is called with no
 * parameters because we force the user to give one
 * store.dispatch(setCount());
 */
store.dispatch(setCount({ count: 101 }));


store.dispatch(resetCount());