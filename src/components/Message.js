import React from "react";

export default class Message extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			name: ""
			, email: ""
			, content: ""
		}
	}

	render() {
		return (
			<div>
				<h1>{ /* message name */ }</h1>
				<h3>{ /* message email */ }</h3>
				<p>{ /* message content */ }</p>
			</div>
		);
	}
}
