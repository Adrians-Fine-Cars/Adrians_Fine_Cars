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
				<div>{vehicle.makemodel}</div>
				<div>{vehicle.engine}</div>
				<div>{vehicle.transmission}</div>
				<div>{vehicle.mileage}</div>
				<div>{vehicle.drivetrain}</div>
				<div>{vehicle.exteriorcolor}</div>
				<div>{vehicle.interiorcolor}</div>
				<div>{vehicle.warranty}</div>
				<div>{vehicle.vin}</div>
				<div>{vehicle.stock}</div>
				<div>{vehicle.citympg}</div>
				<div>{vehicle.hwympg}</div>
				<div>{vehicle.price}</div>
				{/*Puts the images on the page*/}
				{this.mapPhotos(photos)}
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
