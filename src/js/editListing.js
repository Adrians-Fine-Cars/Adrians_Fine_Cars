import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';
import SimpleSerialForm from 'react-simple-serial-form';
import Cookies from 'js-cookie';




export default class editListing extends Component {

constructor() {
		super();
		this.state={
			processing: true,
			vehicleinfo: {}
		}
	}

componentWillMount() {
	let { vehicle_id } = this.props.params;
	console.log(this.props.params);
	console.log('vehicle_id', vehicle_id);
	ajax(`https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle_id}`).then(vehicleinfo => {
			this.setState({vehicleinfo, processing: false});
	})
}

dataHandler(vehicle){
	let { vehicle_id } = this.props.params;
	ajax({
		url: `https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle_id}`,
		type: 'PUT',
		data: vehicle,
		headers: {
			Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
		}
	}).then( response => {
		hashHistory.push(`/dashboard`);
	})
}


renderPage(){
	let einfo = this.state.vehicleinfo.vehicle;
	console.log("einfo", einfo);
	return (
			<div className="ag-section cnl">
				<h2 className="ag-dashboard-title">Adrian's Garage</h2>
				<h2 className="ag-dashboard-text">Edit Your Vehicles Information</h2>
				<div className="cnl-form-wrapper w-form">
					<SimpleSerialForm onData={::this.dataHandler}>
						<div className="cnl-column-one">
							<label className="cnl-label">Make/Model:</label>
							<input className="cnl-input-field w-input" type="text" name="makemodel" placeholder={einfo.makemodel}/>
							<label className="cnl-label">Engine:</label>
							<input className="cnl-input-field w-input" type="text" name="engine" placeholder={einfo.engine}/>
							<label className="cnl-label">Transmission</label>
							<input className="cnl-input-field w-input" type="text" name="transmission" placeholder={einfo.transmission}/>
							<label className="cnl-label">Mileage:</label>
							<input className="cnl-input-field w-input" type="text" name="mileage" placeholder={einfo.mileage}/>
							<label className="cnl-label">Drivetrain:</label>
							<input className="cnl-input-field w-input" type="text" name="drivetrain" placeholder={einfo.drivetrain}/>
							<label className="cnl-label">Exterior Color</label>
							<input className="cnl-input-field w-input" type="text" name="exteriorcolor" placeholder={einfo.exteriorcolor}/>
						</div>
						<div className="cnl-column-two">
							<label className="cnl-label">Interior Color</label>
							<input className="cnl-input-field w-input" type="text" name="interiorcolor" placeholder={einfo.interiorcolor}/>
							<label className="cnl-label">Warranty:</label>
							<input className="cnl-input-field w-input" type="text" name="warranty" placeholder={einfo.warranty}/>
							<label className="cnl-label">VIN:</label>
							<input className="cnl-input-field w-input" type="text" name="vin" placeholder={einfo.vin}/>
							<label className="cnl-label">Stock:</label>
							<input className="cnl-input-field w-input" type="text" name="stock" placeholder={einfo.stock}/>
							<label className="cnl-label">City MPG:</label>
							<input className="cnl-input-field w-input" type="number" name="citympg" placeholder={einfo.citympg}/>
							<label className="cnl-label">Hwy MPG:</label>
							<input className="cnl-input-field w-input" type="number" name="hwympg" placeholder={einfo.hwympg}/>
							<label className="cnl-label">Price</label>
							<input className="cnl-input-field w-input" type="number" name="price" placeholder={einfo.price}/>
							<button className="cnl-submit-btn w-button" type="submit">Submit</button>
							<Link to="/dashboard" className="cnl-cancel-btn w-button">Cancel</Link>
						</div>
					</SimpleSerialForm>
				</div>
			</div>
		)
}


	renderProcessing() {
	return (
		<div className="loading_bg">loading...</div>
	)
}

	render() {
		let { processing } = this.state;
		return (processing
		? this.renderProcessing()
		: this.renderPage()
		)
	}
}
