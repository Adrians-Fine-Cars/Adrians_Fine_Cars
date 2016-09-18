import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class AllInventoryListing extends Component {
	constructor(...args){
		super(...args);
		this.state = { vehicles: [] }
	}

	componentWillMount() {
		ajax({
			url: 'https://adrians-fine-cars-server.herokuapp.com/vehicles/',
			type: 'GET',
			cache: false, 
			dataType: 'json',
		}).then( response => {
			this.setState( { vehicles: response });
		});
	}

	createResults(vehicles) {
		let photo = vehicles.photos.slice(-1)[0];

		return (
			<div key={ vehicles.id }>
			<Link to={ `/vehicle_overview/${vehicles.id}`}>
				<h2>{ vehicles.makemodel }</h2>
				<img src={ photo.photo_url}></img>
				<div>Engine: { vehicles.engine }</div>
				<div>Transmission: { vehicles.transmission }</div>
				<div>Mileage: { vehicles.mileage }</div> 
				<div>Exterior Color: { vehicles.exteriorcolor }</div>
				<div>Interior Color: { vehicles.interiror }</div>
				<div>Price: { vehicles.price }</div>
			</Link>
			</div>
		)
	}

	render() {
		let { vehicles } = this.state;
		return (
			<div className="allinventory_page_wrapper">
				{this.state.vehicles.map(::this.createResults)}
			</div>
		)
	}
}