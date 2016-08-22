import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHitory, IndexRoute, Link } from 'react-router';

export default class About extends Component {
	render() {
		return (
			<div className="about_page_wrapper">
				<div className="about_page_image"></div>
				<h1>Adrian Silva</h1>
				<p className="about_page_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel libero ac tortor laoreet suscipit. Fusce eleifend vulputate dolor id rutrum. Morbi varius lorem ac blandit tincidunt. Quisque finibus massa elit, quis dictum eros interdum id. Pellentesque orci erat, tristique ut euismod quis, fermentum ac turpis. Nunc turpis ligula, elementum nec ante vitae, hendrerit interdum arcu. Ut malesuada consectetur nisi sit amet sagittis. Quisque in tortor placerat, sodales neque in, pulvinar enim. Etiam at orci tincidunt, vulputate felis nec, ornare urna. Pellentesque a turpis et velit fermentum euismod. Integer fermentum augue eget velit placerat mattis. Etiam egestas libero eu purus ullamcorper, eget dapibus orci porta. Sed pulvinar ipsum leo, eget varius diam vehicula non. Aenean odio elit, interdum faucibus lorem pharetra, tincidunt placerat turpis. Aliquam consequat metus leo, quis posuere lectus convallis in.</p>
			</div>
		)
	}
}