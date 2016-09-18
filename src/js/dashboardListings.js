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
			data: {"sold": true},
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
			data: {"featured": true},
			headers: {
				Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
			}
		}).then ( response => {
			let { vehicles } = this.state;
			this.setState( {featured: vehicles} )
			window.location.reload();
		})
	}

	// singlePhoto(photo) {
	// 	let single = vehicles.photos;
	// 	return single.slice(-1)[0];
	// }

	createResults(vehicles) {
		// console.log('vehicles.photos =====>', vehicles.photos);
		// console.log('slicetown---->', vehicles.photos.slice(-1)[0]);
		let photo = vehicles.photos.slice(-1)[0];
		return (
			<div className="dashboard-listing-wrapper" key={ vehicles.id }>
				<img src={ photo.photo_url}></img>
				<div>Make/Model: { vehicles.makemodel }</div>
				<div>Price: { vehicles.price }</div>
				<button onClick={ this.deleteHandler.bind(this, vehicles)}>Delete</button>
				<Link to={`/editListing/${vehicles.id}`}><button>Edit</button></Link>
				<button id="sold_btn" className={this.soldClass(vehicles)} onClick={this.soldHandler.bind(this, vehicles)}>Sold</button>
				<button id="featured_btn" className={this.featuredClass(vehicles)} onClick={this.featuredHandler.bind(this, vehicles)}>Featured</button>
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
			<div className="dashboard_listings_wrapper">
				{ this.state.vehicles.map(::this.createResults) }
			</div>
		)
	}
}

// (response.sold == true ) ? document.getElementById("sold_btn").style.backgroundColor = "red" : document.getElementById("sold_btn").style.backgroundColor = "white";