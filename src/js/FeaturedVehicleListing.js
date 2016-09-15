import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import Slider from 'react-slick';
import { ajax } from 'jquery';
import Cookies from 'js-cookie';



export default class FeaturedVehicleListing extends Component {
	constructor(...args){
		super(...args);
		this.state = { vehicles: [] }
	}

	componentWillMount() {
		ajax({
			url: 'https://adrians-fine-cars-server.herokuapp.com/vehicles/',
			type: 'GET',
			cache: false,
			dataType: 'json'
		}).then( response => {
			this.setState( {vehicles: response} );
		});
	}

	render() {
		var settings = {
			dots: true
		}

		return (
			<div className="slider_container">
				<Slider {...settings}>
		  			<div><img src='http://placekitten.com/g/400/200' /></div>
          			<div><img src='http://placekitten.com/g/400/200' /></div>
          			<div><img src='http://placekitten.com/g/400/200' /></div>
          			<div><img src='http://placekitten.com/g/400/200' /></div>
				</Slider>
			</div>
		)
	}
}