import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import FeaturedVehicleListing from './FeaturedVehicleListing';

export default class Home extends Component {
	render() {
		return (
			<div className="home_wrapper">
				<div className="hero_img">This is the HOME page</div>
				<h1>Featured Vehicles This Month</h1>
				<div className="featured_vehicles_wrapper">
					<FeaturedVehicleListing/>
				</div>
			</div>
		)
	}
}