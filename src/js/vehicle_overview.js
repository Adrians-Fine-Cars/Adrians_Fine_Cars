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

	renderPage() {
		let { vehicleinfo } = this.state;
		console.log('this is vehicleinfo', vehicleinfo);
		return (
			<div className="vehivle_overview_wrapper">
				<div>{vehicleinfo.vehicle.makemodel}</div>
				<div>{vehicleinfo.vehicle.engine}</div>
				<div>{vehicleinfo.vehicle.transmission}</div>
				<div>{vehicleinfo.vehicle.mileage}</div>
				<div>{vehicleinfo.vehicle.drivetrain}</div>
				<div>{vehicleinfo.vehicle.exteriorcolor}</div>
				<div>{vehicleinfo.vehicle.interiorcolor}</div>
				<div>{vehicleinfo.vehicle.warranty}</div>
				<div>{vehicleinfo.vehicle.vin}</div>
				<div>{vehicleinfo.vehicle.stock}</div>
				<div>{vehicleinfo.vehicle.citympg}</div>
				<div>{vehicleinfo.vehicle.hwympg}</div>
				<div>{vehicleinfo.vehicle.price}</div>
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