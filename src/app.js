import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css'; // Normalizes all styles starting points on all browsers.
import './styles/styles.scss'; // SASS styles form

const ExpenseDashboardPage = () =>
(
	<div>
		This is from my dashboard component
	</div>
);

const AddExpensePage = () =>
(
	<div>
		This is from my add expense component
	</div>
);

const EditExpensePage = () =>
(
	<div>
		This is from my edit expense component 
	</div>
);

const HelpPage = () =>
(
	<div>
		This is my help page
	</div>
);

const NotFoundPage = () =>
(
	<div>
		404! <Link to="/">Go Home</Link>
	</div>
);

const Header = () =>
(
	// regular HTML component
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
	</header>
)

// BrowserRouter can only have a single element inside of it
// Switch makes the app traverse through the Route's in order, trying to find a match for the page in the url. So if a page isn't found it will show the final component, NotFoundPage, (which doesn't have a path)
const routers = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
)

ReactDOM.render(routers, document.getElementById('app'));