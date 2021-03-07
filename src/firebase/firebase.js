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

export { firebase, database as default };