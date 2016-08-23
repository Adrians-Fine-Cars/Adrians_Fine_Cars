import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import DashboardListings from './dashboardListings';

export default class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard_page_wrapper">
				<h1>Adrian's Garage</h1>
				<h3>Dashboard</h3>
				<Link to="/createNewListing"><button>Create New Listing</button></Link>
				<Link to="/createFeaturedVehicle"><button>Add Featured Vehicle</button></Link>
				<DashboardListings />
			</div>
		)
	}
}