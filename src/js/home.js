import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import FeaturedVehicleListing from './FeaturedVehicleListing';

export default class Home extends Component {
	render() {
		return (
			<div className="home_wrapper">
  				<div className="section-home" id="home">
    				<h1 className="home-heading">Fine Vehicles for the Right People.</h1>
  				</div>

				<div className="featured_vehicles_wrapper">
					<FeaturedVehicleListing/>
				</div>
			</div>
		)
	}
}