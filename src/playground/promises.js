const promise = new Promise((resolve, reject) =>
{
	setTimeout(() => 
	{
		// resolve(
		// {
		// 	name: 'Luke Marvelly',
		// 	age: 32
		// });
		reject('Something went wrong');
		resolve('This is my other resolved data'); // this will be ignored
	}, 2000);
});

console.log('before');

// then() registers a callback. This will fire if and when 
// the promise resolves. Second argument is treated as catch error like catch() if needed
promise.then((data) => 
{
	console.log('1', data);
})
.catch((error) => 
{
	console.log('Error: ', error);
});

// promise.then((data) => 
// {
// 	console.log('2', data);
// });

console.log('after');