/**
 * ES6 Object Destructuring - Pulling things out of objects using 
 * Curly braces {}
 */

// const person =
// {
// 	name: 'Joe',
// 	age: 32,
// 	location: 
// 	{
// 		city: 'Cardiff',
// 		temp: 82
// 	}
// };

// // person is the object we're trying to destructure
// // We can used equals (=) to set up a default value for name. If we didn't set a default we would get undefined
// const { name: firstName = 'Annonymous', age} = person; // This line is equivelant to the two lines below
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}.`);

// // You can use the colon to rename a variable like with temp. This also means that temp is no longer defined
// const { temp: temperature, city } = person.location 
// console.log(`It's ${temperature} in ${city}`);

// Book object
const book =
{
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: 
	{
		name: 'Penguin'
	}
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


/**
 * Array Destructuring - Pulling things out of arrays using square
 * brackets []
 */

//  array of strings
// const address = ['26 Donald Street', 'Cardiff', 'South Glamorgan', 'CF244TQ'];

// Use square brackets to extract from array. The names declared 
// inside are matched up to the order in the array. 
// street = '26 Donald Street' and so on
// const [ street, city, county, post_code ] = address;

// You don't have to declare all of the items in the array
// You can, for example, if you don't need items at the end of the
// array you can leave them off. You can leave others you don't need
// blank, however you need the comma
// const [ , city, county] = address;
// console.log(`You are in ${city}, ${county}.`);

// const address = [];
// // You can create defaults
// const [ , , county = 'some county' ] = address
// console.log(`You are in ${county}.`)


// const address = ['26 Donald Street', 'Cardiff', 'South Glamorgan', 'CF244TQ'];
// const [ , city, county = 'some state'] = address;
// console.log(`You are in ${city}, ${county}.`);



const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75'];
const [item_name, , medium_price] = item;
console.log(`A medium ${item_name} costs ${medium_price}`);



const incrementCount = (payload = {}) => (
{
	type: 'INCREMENT',
	incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

/**
 * We can deconstruct the object passed in and set it's default
 * value to 1
 * When we deconstruct we can reference values like incrementBy
 * so we can directly reference incrementBy instead of using the
 * operator
 * We can further simplify 'incrementBy: incrementBy' to 'incrementBy'
 * (when referencing a variable (the param) to an object property of
 * the same name we can simplify it to just the name) 
 */
const incrementCount = ({ incrementBy = 1 } = {}) => (
{
	type: 'INCREMENT',
	incrementBy
});