import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';


export default class CreateFeaturedVehicle extends Component {
	render() {
		return (
			<div className="cfv_wrapper">
				<h1>Create Featured Vehicle</h1>
				<h3>DROPZONE so you can upload the ads that will be displayed on the HOME page</h3>
			</div>
		)
	}
}