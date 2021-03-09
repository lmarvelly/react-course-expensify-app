/**
 * '* as' takes all of the named exports from 'firebase' and
 * dumps them inside a new variable called firebase.
 * This is required because firebase doesn't have a default
 * export
 */
import firebase from 'firebase'

const firebaseConfig = 
{
	apiKey: "AIzaSyBneixhmO2MFmgeX3kANDH96zRLJIDBxO8",
	authDomain: "expensify-d7044.firebaseapp.com",
	databaseURL: "https://expensify-d7044-default-rtdb.firebaseio.com",
	projectId: "expensify-d7044",
	storageBucket: "expensify-d7044.appspot.com",
	messagingSenderId: "623281236339",
	appId: "1:623281236339:web:72c3768075d609ef95fd06",
	measurementId: "G-WSGL5K1SN9"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


// Test connection
database.ref().set(
{
	name: 'Luke Marvelly',
	age: 32,
	stressLevel: 7,
	job: 
	{
		title: 'Support Worker',
		company: 'Google'
	},
	isSingle: true,
	location: {
		city: 'Cardiff',
		country: 'Wales'
	}
})
.then(() =>
{
	console.log('Data is saved'); 
})
.catch((error) =>
{
	console.log('This failed.', error);
});


database.ref().update(
{
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Seattle'
});


database.ref('attributes').set(
{
	weight: 70, // kg
	height: 6 // ft
})
.then(() =>
{
	console.log('weight and height attributes set');
})
.catch((error) =>
{
	console.log('An error occured: ', error)
}); // kg

// One way to remove
database.ref('isSingle').remove()
	.then(() => {console.log('Removed isSingle')})
	.catch((error) => {console.log('An error occured', error)});

// Another way to remove is to use null but remove is more explicit
database.ref('isSingle').set(null);

// Retrieve data. However promises can only be run once 
// so this can only be run once
database.ref('name')
	.once('value')
	.then((snapshot) =>
	{
		const val = snapshot.val();
		console.log(val);
	})
	.catch((error) =>
	{
		console.log('Error fetching data.', error)
	});

// Use off to unsubscribe to changes.
database.ref().off();

setTimeout(() => 
{
 	database.ref('age').set(28);
}, 3500);

setTimeout(() => 
{
 	database.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => 
{
 	database.ref('age').set(26);
}, 10500);

// use on() to listen for updates and changes. Use value to get the values
const onValueChange = database.ref().on('value', (snapshot) =>
{
	console.log(snapshot.val());
},
(error) =>
{
	console.log('Error with fetching data.', error)
});

// Retreive data and print to console
database.ref()
	.on('value', (snapshot) =>
	{
		const val = snapshot.val();
		console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
	},
	(error) =>
	{
		console.log('Error when trying to fetch data', error);
	});


// Firebase cannot store arrays like this
const notes = 
[{
	id: '12',
	title: 'First note!',
	body: 'This is my note'
},
{
	id: '352adc',
	title: 'Another note!',
	body: 'This is my note'
}];

database.ref('notes').set(notes);

// It has to be done in objects like this
const firebaseNotes = 
{
	notes: 
	{
		dafddaf:
		{
			title: 'First note',
			body: 'This is my note'
		},
		djakhfka:
		{
			title: 'Another note!',
			body: 'This is my note'
		}
	}
}

// Add using push()
database.ref('notes')
	.push(
	{
		title: 'Course topics',
		body: 'React native, Angular, Python'
	});
 
// You can do things like Update or remove 
database.ref('notes/-MUsqeX0tWflL9nnoiAW').update(
	{
		body: 'shopping'
	});


// Example of adding expenses 
database.ref('expenses')
	.push(
	{
		description: 'Lunch',
		note: 'Bagette at subway',
		amount: 550,
		createAt: 234334232
	});

database.ref('expenses')
	.push(
	{
		description: 'New Phone',
		note: 'Sony E10',
		amount: 15000,
		createAt: 3154316441515
	});

database.ref('expenses')
	.push(
	{
		description: 'Shopping',
		note: 'Weekly shop',
		amount: 7500,
		createAt: 32141436542
	});

// Converting (parsing) the data from firebase into an array of objects
database.ref('expenses')
	.once('value')
	.then((snapshot) => 
	{
		const expenses = [];

		// iterate over snapshot
		snapshot.forEach((childSnapshot) =>
		{
			expenses.push(
			{
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});

		console.log(expenses);
	})
	.catch((error) =>
	{
		console.log('Whoops something went wrong. ', error);
	}
);


// Retrieving expenses data
const onValueChange = database.ref('expenses')
	.on('value', (snapshot) =>
	{
		const expenses = [];

		snapshot.forEach((childSnapshot) => 
		{
			expenses.push(
			{
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});

		console.log('change is happening', expenses);
	},
	(error) => 
	{
		console.log('Whoops something went wrong.', error)
	});

// Child removed
database.ref('expenses').on('child_removed', (snapshot) =>
{
	console.log(snapshot.key, snapshot.val());
});

// child changed
database.ref('expenses').on('child_changed', (snapshot) =>
{
	console.log(snapshot.key, snapshot.val());
});

//child added fires for every object in expenses
database.ref('expenses').on('child_added', (snapshot) =>
{
	console.log(snapshot.key, snapshot.val());
});