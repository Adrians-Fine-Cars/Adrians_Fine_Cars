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
		console.log('vehicleinfo', vehicleinfo)
		return (
			<div className="vehivle_overview_wrapper">
				<div>{vehicleinfo.makemodel}</div>
				<div>{vehicleinfo.engine}</div>
				<div>{vehicleinfo.transmission}</div>
				<div>{vehicleinfo.mileage}</div>
				<div>{vehicleinfo.drivetrain}</div>
				<div>{vehicleinfo.exteriorcolor}</div>
				<div>{vehicleinfo.interiorcolor}</div>
				<div>{vehicleinfo.warranty}</div>
				<div>{vehicleinfo.vin}</div>
				<div>{vehicleinfo.stock}</div>
				<div>{vehicleinfo.citympg}</div>
				<div>{vehicleinfo.hwympg}</div>
				<div>{vehicleinfo.price}</div>
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