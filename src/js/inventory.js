import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';
import AllInventoryListing from './AllInventoryListing'

export default class Inventory extends Component {
	render() {
		return (
			<div className="inventory_page_wrapper">
				<AllInventoryListing/>
			</div>
		)
	}
}