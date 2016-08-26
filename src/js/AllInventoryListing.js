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
		return (
			<div key={ vehicles.id }>
				<div>{ vehicles.makemodel }</div>
				<div>{ vehicles.engine }</div>
				<div>{ vehicles.transmission }</div>
				<div>{ vehicles.mileage }</div> 
				<div>{ vehicles.exteriorcolor }</div>
				<div>{ vehicles.interiror }</div>
				<div>{ vehicles.price }</div>
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