import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => 
({
	type: 'LOGIN',
	uid
});

// Start the log in process
export const startLogin = () =>
{
	return () =>
	{
		// Sets up it Log in using the popup system
		return firebase.auth().signInWithPopup(googleAuthProvider)
	};
};

export const logout = () =>
({
	type: 'LOGOUT'
});


export const startLogout = () =>
{
	return () =>
	{
		return firebase.auth().signOut();
	};
};