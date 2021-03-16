import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// The apps history which we can use in other Javascript files
export const history = createHistory();

/**
 * @constant AppRouter
 * 
 * @BrowserRouter can only have a single element inside of it
 * @Switch makes the app traverse through the Route's in order, trying to find a match for the page in the url. So if a page isn't found it will show the final component, NotFoundPage, (which doesn't have a path)
 * 
 * @Route
 * 	@:id will give use access to whatever comes after edit/
 */
const AppRouter = () => 
(
	<Router history={ history }>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} 	/>
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
				<PrivateRoute path="/create" component={AddExpensePage} />
				<PrivateRoute path="/edit/:id" component={EditExpensePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;