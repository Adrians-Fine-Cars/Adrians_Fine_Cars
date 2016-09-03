import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';
import Cookies from 'js-cookie';

export default class DashboardListings extends Component {
	constructor(...args){
		super(...args);
		this.state = { vehicles: [] }
	}

	componentWillMount() {
		ajax({
			url: 'https://adrians-fine-cars-server.herokuapp.com/vehicles/',
			type: 'GET',
			cache: false,
			dataType: 'json'
		}).then( response => {
			this.setState( {vehicles: response} );
		});
	}

	deleteHandler(vehicle) {
		ajax({
			url: `https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle.id}`,
			type: 'DELETE',
			headers: {
				Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
			}
		}).then (response => {
			console.log('response', response);
			let { vehicles } = this.state;
			vehicles.splice(vehicles.indexOf(vehicles), 1);
			this.setState({vehicles: vehicles});
		})
	}

	createResults(vehicles) {

		return (
			<div key={ vehicles.id }>
				<div>{ vehicles.makemodel }</div>
				<div>{ vehicles.price }</div>
				<button onClick={ this.deleteHandler.bind(this, vehicles)}>Delete</button>
			</div>
		)
	}


	render() {
		let { vehicles } = this.state;
		return (
			<div className="dashboard_listings_wrapper">
				{ this.state.vehicles.map(::this.createResults) }
			</div>
		)
	}
}