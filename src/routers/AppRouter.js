import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AppExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


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
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={LoginPage} exact={true}/>
				<Route path="/dashboard" component={ExpenseDashboardPage}/>
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;