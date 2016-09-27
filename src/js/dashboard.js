import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import DashboardListings from './dashboardListings';

export default class Dashboard extends Component {
	render() {
		return (
			<div className="ag-section dashboard">
    			<h2 className="ag-dashboard-title">Adrian's Garage</h2>
    			<h3 className="ag-dashboard-text">Dashboard</h3>
				<Link to="/createNewListing"><button className="ag-dash-cnlbutton w-button">Create New Listing</button></Link>
					<div className="dashboard-page-wrapper">
						<DashboardListings />
					</div>
			</div>
		)
	}
}