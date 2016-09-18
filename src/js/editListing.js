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
			<div className="create_new_wrapper">
				<h2>Edit Your Vehicles Information</h2>
				<SimpleSerialForm onData={::this.dataHandler}>

					<label>Make/Model:</label>
					<input type="text" name="makemodel" placeholder={einfo.makemodel}/>
					<label>Engine:</label>
					<input type="text" name="engine" placeholder={einfo.engine}/>
					<label>Transmission</label>
					<input type="text" name="transmission" placeholder={einfo.transmission}/>
					<label>Mileage:</label>
					<input type="text" name="mileage" placeholder={einfo.mileage}/>
					<label>Drivetrain:</label>
					<input type="text" name="drivetrain" placeholder={einfo.drivetrain}/>
					<label>Exterior Color</label>
					<input type="text" name="exteriorcolor" placeholder={einfo.exteriorcolor}/>
					<label>Interior Color</label>
					<input type="text" name="interiorcolor" placeholder={einfo.interiorcolor}/>
					<label>Warranty:</label>
					<input type="text" name="warranty" placeholder={einfo.warranty}/>
					<label>VIN:</label>
					<input type="text" name="vin" placeholder={einfo.vin}/>
					<label>Stock:</label>
					<input type="text" name="stock" placeholder={einfo.stock}/>
					<label>City MPG:</label>
					<input type="number" name="citympg" placeholder={einfo.citympg}/>
					<label>Hwy MPG:</label>
					<input type="number" name="hwympg" placeholder={einfo.hwympg}/>
					<label>Price</label>
					<input type="number" name="price" placeholder={einfo.price}/>
					<button type="submit">Submit</button>
					<Link to="/dashboard">Cancel</Link>
				</SimpleSerialForm>
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
