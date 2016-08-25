import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import { ajax, ajaxSetup } from 'jquery';
import SimpleSerialForm from 'react-simple-serial-form';
import Cookies from 'js-cookie';
import Dashboard from './dashboard';

export default class Login extends Component {

	dataHandler(loginInfo) {
		ajax({
			url:'https://adrians-fine-cars-server.herokuapp.com/login/',
			type: 'POST',
			data: loginInfo,
			cache: false, 
			dataType: 'json',
		}).then((response)=> {
			Cookies.set('currentUser', response.access_token, {expires: 1});
			ajaxSetup({
				header: { 'access_token': response.access_token }
			})
			hashHistory.push('/dashboard');
		}).fail(error => {
			console.log('failed to log in');
		});
	}

	render() {
		return (
			<div className="login_page_wrapper">
					<div className="login_img_container">
						<h1>Adrian's Garage</h1>
						<img className="login_img" />
					</div>
					
					<SimpleSerialForm onData={::this.dataHandler}>
						<div className="login_container">
							<label>Email:</label>
							<input type="email" placeholder="Enter Email" name="email" required></input>
						
							<label>Password:</label>
							<input type="password" placeholder="Enter Password" name="password" required></input>

							<div>
								<button type="submit">Login</button>
							</div>
						</div>
					</SimpleSerialForm>
			</div>
		)
	}
}