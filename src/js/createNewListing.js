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
			<div className="create_new_wrapper">
				<SimpleSerialForm onData={::this.dataHandler}>

				<ReactFilepicker apikey="Agy7O3nhWTveC0FVAGgCnz" mode="pickMultiple" defaultWidget={false} options={options} onSuccess={::this.photoHandler}/>

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

//				<input type="filepicker" data-fp-apikey="Agy7O3nhWTveC0FVAGgCnz"
//					onchange="alert(event.fpfile.url)"/>
