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

	soldHandler(vehicle) {
		ajax({
			url: `https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle.id}`,
			type: 'PUT',
			data: {"sold": !vehicle.sold},
			headers: {
				Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
			}
		}).then( response => {
			let { vehicles } = this.state;
			console.log('response from PUT', response.sold);
			this.setState( {vehicles: vehicles} )
			window.location.reload();
		})
	}

	featuredHandler(vehicle) {
		ajax({
			url: `https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle.id}`,
			type: 'PUT',
			data: {"featured": !vehicle.featured},
			headers: {
				Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
			}
		}).then ( response => {
			let { vehicles } = this.state;
			this.setState( {featured: vehicles} )
			window.location.reload();
		})
	}


	createResults(vehicles) {
		let photo = vehicles.photos.slice(-1)[0];
		return (
			<div className="dashboard-listings-wrapper" key={ vehicles.id }>
				<div className="dashboard-buttons-wrapper">
					<button className="dashboard-listing-buttons" onClick={ this.deleteHandler.bind(this, vehicles)}>Delete</button>
					<Link to={`/editListing/${vehicles.id}`}><button className="dashboard-listing-buttons">Edit</button></Link>
					<button className="dashboard-listing-buttons" id="sold_btn" className={this.soldClass(vehicles)} onClick={this.soldHandler.bind(this, vehicles)}>Sold</button>
					<button className="dashboard-listing-buttons"  id="featured_btn" className={this.featuredClass(vehicles)} onClick={this.featuredHandler.bind(this, vehicles)}>Featured</button>
				</div>
				<img className="dashboard-listing-image" src={ photo.photo_url}></img>
				<div className="dashboard-listing-text">Make/Model: { vehicles.makemodel }</div>
				<div className="dashboard-listing-text">Price: { vehicles.price }</div>
			</div>
		)
	}

	soldClass(vehicle) {
		return (vehicle.sold) ? 'sold-true' : 'sold-false';
	}

	featuredClass(vehicle) {
		return (vehicle.featured) ? 'featured-true' : 'featured-false';
	}

	render() {
		let { vehicles } = this.state;
		return (
			<div className="dashboard-mapped-wrapper">
				{ this.state.vehicles.map(::this.createResults) }
			</div>
		)
	}
}

