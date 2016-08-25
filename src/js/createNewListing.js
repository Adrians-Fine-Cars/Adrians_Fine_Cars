import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import { ajax } from 'jquery';



export default class CreateNewListings extends Component {

	constructor() {
		super();
		this.state={
			preview: 'http://www.martinezcreativegroup.com/wp-content/uploads/2014/05/img-placeholder.png',
			processing: false
		}
	}

	dropHandler([file]) {
		this.setState({
			preview: file.preview
		});
		this.file = file;
	}

	dataHandler(newListing) {
		let data = new FormData();

		Object.keys(newListing).forEach(key => {
			let val = newListing[key];
			data.append(key, val);
			data.append('image', this.file);
		})

		this.setState({processing: true})

		ajax({
			url: 'https://adrians-fine-cars-server.herokuapp.com/vehicles',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false
		}).then ( response => {
			this.setState({processing: false})
			hashHistory.push(`/dashboard/${response.residence.id}`)
		});
	}



	renderPage() {
		return (
			<div className="create_new_wrapper">
				<SimpleSerialForm onData={::this.dataHandler}>

					<div className="dropzone_wrapper">
						<Dropzone className="dropzone" onDrop={::this.dropHandler}>
							<label className="drop_label">Vehicle Images</label>
							<input type="hidden" value={this.state.preview} name="image"/>
							<img className="dropzone_img" src={this.state.preview}/>
						</Dropzone>
					</div>

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

