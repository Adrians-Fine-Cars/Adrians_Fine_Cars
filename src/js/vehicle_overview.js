import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';

export default class VehicleOverview extends Component {
	constructor(...props){
		super(...props);
		this.state={ vehicleinfo: {}, loading: true
		};
	}

	componentWillMount() {
		let { vehicle_id } = this.props.params;
		console.log(this.props.params);
		console.log('vehicle_id', vehicle_id);
		ajax(`https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle_id}`).then(vehicleinfo => {
			this.setState({vehicleinfo, loading: false});
		})
	}

	mapPhotos(photos){
		 /*map the photos to img tags*/
			return photos.map(photo => {
			return (
				<div key={photo.id}>
					<img src={photo.photo_url}></img>
				</div>
			)
		})
	}

	renderPage() {
		/*Different way to destructure the state object so it's more consise*/
		let { photos, vehicle } = this.state.vehicleinfo;
		return (
			<div className="vehivle_overview_wrapper">
				{/*Puts the images on the page*/}
				{this.mapPhotos(photos)}
				<div>Make & Model: {vehicle.makemodel}</div>
				<div>Engine: {vehicle.engine}</div>
				<div>Transmission: {vehicle.transmission}</div>
				<div>Mileage: {vehicle.mileage}</div>
				<div>Drivetrain: {vehicle.drivetrain}</div>
				<div>Exterior Color: {vehicle.exteriorcolor}</div>
				<div>Interior Color: {vehicle.interiorcolor}</div>
				<div>Warranty: {vehicle.warranty}</div>
				<div>VIN #: {vehicle.vin}</div>
				<div>Stock #:{vehicle.stock}</div>
				<div>CITY Mpg: {vehicle.citympg}</div>
				<div>HWY Mpg: {vehicle.hwympg}</div>
				<div>Price: {vehicle.price}</div>
			</div>
		)
	}

	renderLoading() {
		return (
			<div>Loading... PLZ WAIT</div>
		)
	}



	render() {
		let { loading } = this.state;
			return loading ? this.renderLoading() : this.renderPage()
	}
}
