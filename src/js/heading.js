import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Heading extends Component {
	render() {
		return (
			<div>
				<div className="nav-header w-nav" data-animation="default" data-collapse="tiny" data-contain="1" data-duration="400">
					<div className="nav-container w-container">
						<Link to="/"><div className="brand w-nav-brand"><img className="nav-logo-image" src="images/AFC_Logo.png"/></div></Link>
						<nav className="nav-menu w-nav-menu" role="navigation">
							<Link className="nav-link w-nav-link" to="/featured_vehicle"> Featured Vehicles </Link>
							<Link className="nav-link w-nav-link" to="/inventory"> Inventory </Link>
							<Link className="nav-link w-nav-link" to="/about"> About </Link>
							<Link className="nav-link w-nav-link" to="/contact"> Contact </Link>
							<div className="phone-wrapper"><img className="phone-icon" sizes="(max-width: 479px) 100vw, 23px" src="images/phone-icon.png" srcsSet="images/phone-icon-p-500x501.png 500w, images/phone-icon.png 594w" width="23"/>
							<a className="nav-phone-number" href="tel:6788500765">(678) 850-0765</a></div>
						</nav>
					</div>
				</div>


				{this.props.children}
				<footer className="footer">
					<div>Adrians Fine Cars 2016</div>
					<Link to="/login"><button>AG</button></Link>
				</footer>
			</div>
		)
	}
}
