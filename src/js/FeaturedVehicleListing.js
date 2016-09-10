import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import Slider from 'react-slick';


export default class FeaturedVehicleListing extends Component {
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