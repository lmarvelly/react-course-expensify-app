/**
 * Higher Order Component (HOC) - A component (HOC) that renders 
 * another component
 * 
 * The goal of a higher order component is to:
 * 	Reuse code
 * 	Render hijacking
 * 
 * This show a good example of how HOCs can be used.
 * It shows that we can create a reusable component that displays an 
 * admin message only if the user is admin
 */ 

import React from 'react';
import ReactDOM from 'react-dom';

// This is the 'another component'
const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);


/**
 * @constant withAdminWarning
 * @description This is just a regular function that returns a Higher
 * Order Component. HOC
 * @param {*} WrappedComponent component we want to wrap with the 
 * HOC
 * 
 * @return this IS the Higher Order Component (HOC).
 * Has a condition to print out message if isAdmin is true.
 * The WrappedComponent's props are passed down and spread out.
 */	 
const withAdminWarning = (WrappedComponent) =>
{
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

// 
const requireAuthentication = (WrappedComponent) =>
{
	return (props) => (
		<div>
			{props.isAuthenticated ? 
				(<WrappedComponent {...props} />) 
				: 
				(<p>Please login to see the info</p>)
			}
		</div>
	)
};

/**
 * @component AdminInfo
 * @description 
 */
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// Create: requireAuthentication
// message "Please login to see the info"

// ReactDOM.render(<Info info="This is the details"/>, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the details"/>, document.getElementById('app'));