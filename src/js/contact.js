import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';

export default class Contact extends Component {
	render() {
		return (
			<div className="contact_wrapper">
			<h1>Contact Us</h1>
				<div className="contact_input_wrappers">
					<form>
						<label>First Name:</label>
						<input type="text" name="first-name"></input>
						<label>Last Name:</label>
						<input type="text" name="last-name"></input>
						<label>Email</label>
						<input type="email" name="email"></input>
						<label>Phone:</label>
						<input type="tel" name="phone"></input>
						<label>Message:</label>
						<textarea rows="4" cols="50" maxLength="300"></textarea>
						<input type="submit" value="Submit"></input>
					</form>
				</div> 
			</div>
		)
	}
}