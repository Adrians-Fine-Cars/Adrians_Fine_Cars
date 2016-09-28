import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import { ajax } from 'jquery';
import Cookies from 'js-cookie';
import ReactFilepicker from 'react-filepicker';



export default class CreateNewListings extends Component {

	constructor() {
		super();
		this.state={
			// preview: 'http://www.martinezcreativegroup.com/wp-content/uploads/2014/05/img-placeholder.png',
			processing: false,
			photos: []
		}
	}

	// dropHandler([file]) {
	// 	this.setState({
	// 		preview: file.preview
	// 	});
	// 	this.file = file;
	// }

	dataHandler(newListing) {
		console.log(Cookies.getJSON("user").user.access_token);
		// let data = new FormData();
		//
		// Object.keys(newListing).forEach(key => {
		// 	let val = newListing[key];
		// 	data.append(key, val);
		// 	data.append('image', this.file);
		// })
    console.log(newListing);
		this.setState({processing: true})


		ajax({
			url: 'https://adrians-fine-cars-server.herokuapp.com/vehicles',
			type: 'POST',
			data: newListing,
			headers: {
				Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
			}
		}).then ( response => {
			console.log('this is this.photos...', this.state.photos);
			ajax({
				url: `https://adrians-fine-cars-server.herokuapp.com/photos/${response.id}`,
				type: 'POST',
				data: {
					photos: this.state.photos
				},
				headers: {
					Authorization: `Bearer ${Cookies.getJSON("user").user.access_token}`
				}
			}).then(response => {
				console.log('response after photo post...', response);
				this.setState({processing: false})
				hashHistory.push(`/dashboard`)
			})
			
		});
	}

	photoHandler(photos){
		console.log('photohandler', photos);
		let photogroup = photos.map(function(photo){
			console.log('photo.url===>', photo.url);
			return {photo_url: photo.url};
		});
			this.setState({
				photos: photogroup
			})
			console.log('photogroup work doi', photogroup);
		}

	renderPage() {
		const options = {
			buttonText: 'Click Here To Add Images',
			buttonClass: 'filepicker',
			mimeType: 'image/*',
			container: 'window',
			services: ['COMPUTER']
		};




		return (
			<div className="ag-section cnl">
			  <h2 className="ag-dashboard-title">Adrian's Garage</h2>
    		  <h3 className="ag-dashboard-text">Create new listing</h3>
    		  	<div className="cnl-form-wrapper w-form">
						<SimpleSerialForm onData={::this.dataHandler}>
							<div className="cnl-images-wrapper">
								<ReactFilepicker id="cnl-addimages-button" apikey="Agy7O3nhWTveC0FVAGgCnz" mode="pickMultiple" defaultWidget={false} options={options} onSuccess={::this.photoHandler}/>
							</div>
							 <div className="cnl-column-one">
								<label className="cnl-label">Make/Model:</label>
								<input className="cnl-input-field w-input" type="text" name="makemodel"/>
								<label className="cnl-label">Engine:</label>
								<input className="cnl-input-field w-input" type="text" name="engine"/>
								<label className="cnl-label">Transmission</label>
								<input className="cnl-input-field w-input" type="text" name="transmission"/>
								<label className="cnl-label">Mileage:</label>
								<input className="cnl-input-field w-input" type="text" name="mileage"/>
								<label className="cnl-label">Drivetrain:</label>
								<input className="cnl-input-field w-input" type="text" name="drivetrain"/>
								<label className="cnl-label">Exterior Color</label>
								<input className="cnl-input-field w-input" type="text" name="exteriorcolor"/>
							</div>
							<div className="cnl-column-two">
								<label className="cnl-label">Interior Color</label>
								<input className="cnl-input-field w-input" type="text" name="interiorcolor"/>
								<label className="cnl-label">Warranty:</label>
								<input className="cnl-input-field w-input" type="text" name="warranty"/>
								<label className="cnl-label">VIN:</label>
								<input className="cnl-input-field w-input" type="text" name="vin"/>
								<label className="cnl-label">Stock:</label>
								<input className="cnl-input-field w-input" type="text" name="stock"/>
								<label className="cnl-label">City MPG:</label>
								<input className="cnl-input-field w-input" type="number" name="citympg"/>
								<label className="cnl-label">Hwy MPG:</label>
								<input className="cnl-input-field w-input" type="number" name="hwympg"/>
								<label className="cnl-label">Price</label>
								<input className="cnl-input-field w-input" type="number" name="price"/>
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

//				<input type="filepicker" data-fp-apikey="Agy7O3nhWTveC0FVAGgCnz"
//					onchange="alert(event.fpfile.url)"/>
