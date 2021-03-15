import { firebase, googleAuthProvider } from '../firebase/firebase'

// Start the log in process
export const startLogin = () =>
{
	return () =>
	{
		// Sets up it Log in using the popup system
		return firebase.auth().signInWithPopup(googleAuthProvider)
	};
};

export const startLogout = () =>
{
	return () =>
	{
		return firebase.auth().signOut();
	};
};