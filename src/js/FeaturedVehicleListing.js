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
		return (
		<div className="section-featuredvehicle" id="featured-vehicle">
		    <h1 className="fv-heading">Featured Vehicles</h1>
		   <div className="fv-slider w-slider" data-animation="slide" data-duration="500" data-infinite="1">
		      <div className="fv-mask w-slider-mask">
		        <div className="slide w-slide">
		          <div className="slide-content-wrapper"></div>
		        </div>
		        <div className="slide w-slide">
		          <div className="slide-content-wrapper"></div>
		        </div>
		      </div>
		      <div className="fv-leftarrow w-slider-arrow-left">
		        <div className="w-icon-slider-left"></div>
		      </div>
		      <div className="fv-rightarrow w-slider-arrow-right">
		        <div className="w-icon-slider-right"></div>
		      </div>
		      <div className="fv-slidenav w-round w-slider-nav"></div>
		   </div>
  		</div>
  		)
	}
}



	// render() {
	// 	var settings = {
	// 		dots: true
	// 	}

	// 	return (
	// 		<div className="slider_container">
	// 			<Slider {...settings}>
	// 	  			<div><img src='http://placekitten.com/g/400/200' /></div>
 //          			<div><img src='http://placekitten.com/g/400/200' /></div>
 //          			<div><img src='http://placekitten.com/g/400/200' /></div>
 //          			<div><img src='http://placekitten.com/g/400/200' /></div>
	// 			</Slider>
	// 		</div>