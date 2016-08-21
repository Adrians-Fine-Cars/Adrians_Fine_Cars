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
			<Route path="/home" component={Home} />
			<Route path="/inventory" component={Inventory} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>
	), document.querySelector('.container'));