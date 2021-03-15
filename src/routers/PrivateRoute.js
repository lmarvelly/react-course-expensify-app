import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header'; 


/**
 * Giving component an uppercase letter because we're going to be 
 * rendering it.
 * 
 * ...rest is the rest of the properties that were not
 * de-structured. This passes them down to props. It doesn' have to
 * be called rest. It could be called anything.
 */
//  
// 
export const PrivateRoute = 
({ 
	isAuthenticated, 
	component: Compenent,
	...rest
}) => 
(
	<Route { ...rest } 
		component={( props ) => 
		(
			isAuthenticated ? 
			(
				<div>
					<Header />
					<Compenent { ...props }/>
				</div>
			)
			: 
			(
				<Redirect to="/" />
			)
		)} 
	/>
);

// !! to flip to boolean values. Otherwise we get unothenticated if uid doesn't exist
const mapStateToProps = (state) =>
({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);