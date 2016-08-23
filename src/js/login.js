import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';

export default class Login extends Component {
	render() {
		return (
			<div className="login_page_wrapper">
				<form>
					<div className="login_img_container">
						<h1>Adrian's Garage</h1>
						<img className="login_img" />
					</div>
					
					<div className="login_container">
						<label>Username</label>
						<input type="text" placeholder="Enter Username" name="username" required></input>
						
						<label>Password</label>
						<input type="password" placeholder="Enter Password" name="psw" required></input>

						<div>
							<Link to="/dashboard"><button type="submit">Login</button></Link>
						</div>
					</div>
				</form>
			</div>
		)
	}
}