import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Heading extends Component {
	render() {
		return (
			<div>
				<div className="heading">
					<Link to="/"><div className="site-logo"></div></Link>
					<Link className="heading-link" to="/home"> Home </Link>
					<Link className="heading-link" to="/inventory"> Inventory </Link>
					<Link className="heading-link" to="/about"> About </Link>
					<Link className="heading-link" to="/contact"> Contact </Link>
					<span className="phone-number">(678)850-0765</span>
				</div>
				{this.props.children}
				<footer className="footer">
					<div>Adrians Fine Cars 2016</div>

				</footer>
			</div>
		)
	}
}