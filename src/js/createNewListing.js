import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';


//Need to add DROPZONE's or some kind of picture uploading plugin for 7 photos...


export default class CreateNewListings extends Component {
	render() {
		return (
			<div className="create_new_wrapper">
				<form>
					<label>Make/Model:</label>
					<input type="text" name="make_model"></input>
					<label>Engine:</label>
					<input type="text" name="engine"></input>
					<label>Transmission</label>
					<input type="text" name="transmission"></input>
					<label>Mileage:</label>
					<input type="text" name="mileage"></input>
					<label>Drivetrain:</label>
					<input type="text" name="drivetrain"></input>
					<label>Exterior Color</label>
					<input type="text" name="exterior_color"></input>
					<label>Interior Color</label>
					<input type="text" name="interior_color"></input>
					<label>Warranty:</label>
					<input type="text" name="warranty"></input>
					<label>VIN:</label>
					<input type="text" name="vin"></input>
					<label>Stock:</label>
					<input type="text" name="stock"></input>
					<label>City MPG:</label>
					<input type="text" name="city_mpg"></input>
					<label>Hwy MPG:</label>
					<input type="text" name="hwy_mpg"></input>
					<label>Price</label>
					<input type="text" name="price"></input>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		)
	}
}
