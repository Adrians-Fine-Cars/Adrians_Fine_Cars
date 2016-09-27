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
			console.log(response);
			Cookies.set("user", {user: response});
			hashHistory.push('/dashboard');
		}).fail(error => {
			console.log(error)
			console.log('failed to log in');
		});
	}

	render() {
		return (
				<div className="ag-section login">
    				<div className="login-container w-container">
      				<div className="ag-flexwrapper">
        				<h2 className="ag-landing-title">Adrian's Garage</h2>

					<SimpleSerialForm onData={::this.dataHandler}>
        				<div className="w-form">
            				<input className="ag-login-textfield w-input" data-name="email" id="email" maxLength="256" name="email" placeholder="Enter Email" required="required" type="email"></input>
            				<input className="ag-login-textfield w-input" data-name="password" id="password" maxLength="256" name="password" placeholder="Password" required="required" type="password"></input>
            				<input className="ag-login-button w-button" data-wait="Please wait..." type="submit" value="Submit"></input>
        				</div>
					</SimpleSerialForm>
				</div>
				</div>
			</div>
		)
	}
}

						// <div className="login_container">
						// 	<label>Email:</label>
						// 	<input type="email" placeholder="Enter Email" name="email" required></input>

						// 	<label>Password:</label>
						// 	<input type="password" placeholder="Enter Password" name="password" required></input>

						// 	<div>
						// 		<button type="submit">Login</button>
						// 	</div>
						// </div>