import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Heading from './heading';
import Home from './home';
import Inventory from './inventory';
import VehicleOverview from './vehicle_overview';
import About from './about';
import Contact from './contact';
import Login from './login';
import Dashboard from './dashboard';
import CreateNewListing from './createNewListing';



ReactDOM.render ((
	<Router history={hashHistory}>
		<Route path="/" component={Heading}>
			<IndexRoute component={Home} />
			<Route path="/inventory" component={Inventory} />
			<Route path="/vehicle_overview/:vehicle_id" component={VehicleOverview} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		</Route>
		<Route path="/login" component={Login} />
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/createNewListing" component={CreateNewListing} />
	</Router>
	), document.querySelector('.container'));
