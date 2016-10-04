import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import SimpleSerialForm from 'react-simple-serial-form';

export default class Contact extends Component {
	render() {
		return (
			<div className="contactus section">
				<h2 className="contactus-heading">Contact Us</h2>
				  <div className="contactus-form-wrapper w-form">
						<SimpleSerialForm className="contact-us-form">
						  <div className="w-row">
							  <div className="contactus-columns left w-col w-col-6">
								<label className="contactus-label">First Name:</label>
								<input className="contact-us-inputs w-input" type="text" name="first-name" required="required"></input>
								<label className="contactus-label">Last Name:</label>
								<input className="contact-us-inputs w-input" type="text" name="last-name" required="required"></input>
							  </div>

							  <div className="contactus-columns right w-col w-col-6">
								<label className="contactus-label">Email:</label>
								<input className="contact-us-inputs w-input" type="email" name="email" required="required"></input>
								<label className="contactus-label">Phone:</label>
								<input className="contact-us-inputs w-input" type="tel" name="phone" required="required"></input>
							  </div>
						  </div>
						  <div className="contactus-columns right w-col w-col-6">
							<label className="contactus-label">Message:</label>
							<textarea className="contact-us-inputs textarea w-input" rows="4" cols="50" maxLength="300" required="required"></textarea>
							<button className="contactus-submit-btn w-button" type="submit">Submit</button>
						  </div>
						</SimpleSerialForm>
				  </div>
			</div>
		)
	}
}