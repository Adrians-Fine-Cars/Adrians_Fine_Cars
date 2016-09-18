import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax } from 'jquery';
import SimpleSerialForm from 'react-simple-serial-form';



export default class editListing extends Component {

constructor() {
		super();
		this.state={
			processing: false,
			vehicleinfo: {}
		}
	}

componentWillMount() {
	let { vehicle_id } = this.props.params;
	console.log(this.props.params);
	console.log('vehicle_id', vehicle_id);
	ajax(`https://adrians-fine-cars-server.herokuapp.com/vehicles/${vehicle_id}`).then(vehicleinfo => {
			this.setState({vehicleinfo, loading: false});
	})
}

dataHandler(vehicle){

}


renderPage(){
	let vehicle = this.state.vehicleinfo;
	let einfo = vehicle.vehicle;
	console.log("einfo", einfo);
	console.log('vehicle!!!!!', vehicle);
	return (
			<div className="create_new_wrapper">
				<SimpleSerialForm onData={::this.dataHandler}>

					<label>Make/Model:</label>
					<input type="text" name="makemodel"/>
					<label>Engine:</label>
					<input type="text" name="engine"/>
					<label>Transmission</label>
					<input type="text" name="transmission"/>
					<label>Mileage:</label>
					<input type="text" name="mileage"/>
					<label>Drivetrain:</label>
					<input type="text" name="drivetrain"/>
					<label>Exterior Color</label>
					<input type="text" name="exteriorcolor"/>
					<label>Interior Color</label>
					<input type="text" name="interiorcolor"/>
					<label>Warranty:</label>
					<input type="text" name="warranty"/>
					<label>VIN:</label>
					<input type="text" name="vin"/>
					<label>Stock:</label>
					<input type="text" name="stock"/>
					<label>City MPG:</label>
					<input type="number" name="citympg"/>
					<label>Hwy MPG:</label>
					<input type="number" name="hwympg"/>
					<label>Price</label>
					<input type="number" name="price"/>
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