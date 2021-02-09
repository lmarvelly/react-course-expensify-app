/**
 * transform-object-rest-spread plugin. Allows us to use spread but
 * with objects as well as arrays
 * We use this in out expensify project to clone objects, overriding
 * various properties
 */
const user = 
{
	name: 'Luke',
	age: 32
}

console.log(
{
	name: 'Joe', // will not override if it's before
	...user, // the object spread
	location: 'Aberystwyth',
	age: 33
});