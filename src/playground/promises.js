const promise = new Promise((resolve, reject) =>
{
	setTimeout(() => 
	{
		resolve(
		{
			name: 'Luke Marvelly',
			age: 32
		});
		// When we reject from a promise, none of the success cases get called (in this case the then() method)
		// reject('Something went wrong');
		// resolve('This is my other resolved data'); // this will be ignored
	}, 2000);
});

// console.log('before');

// // then() registers a callback. This will fire if and when 
// // the promise resolves. Second argument is treated as catch error like catch() if needed
// // You can have a second then
// promise.then((data) => 
// {
// 	console.log('1', data);

// 	// The next then() statement has access the the returned value below
// 	return 'Some data'; 
// })
// .then((str) =>
// {
// 	console.log('2', 'this runs after first then()')
// })
// .catch((error) => 
// {
// 	console.log('Error: ', error);
// });

// // promise.then((data) => 
// // {
// // 	console.log('2', data);
// // });

// console.log('after');



// ###################################
// ###### Return second promise ######
// ###################################
console.log('before');

promise.then((data) => 
{
	console.log('1', data);

	return new Promise((resolve, reject) =>
	{
		setTimeout(() => 
		{
			resolve('This is my other promise');
		}, 2000);
	});
})
.then((str) =>
{
	console.log('does this run?', str)
})
.catch((error) => 
{
	console.log('Error: ', error);
});

console.log('after');

