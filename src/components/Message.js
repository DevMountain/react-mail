import React from "react";

import { findMessageById } from "../services/messageService";

export default class Message extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			name: ""
			, email: ""
			, content: ""
		}
	}

	componentWillMount() {
		this.getMessage.call( this, this.props.params.messageId );
	}

	componentWillUpdate( nextProps, nextState ) {
		if ( nextProps.params.messageId !== this.props.params.messageId ) {
			this.getMessage.call( this, nextProps.params.messageId );
		}
	}

	getMessage( messageId ) {
		const message = findMessageById( messageId );

		this.setState( {
			name: message.name
			, email: message.email
			, content: message.content
		} );
	}

	render() {
		return (
			<div>
				<h1>{ this.state.name }</h1>
				<h3>{ this.state.email }</h3>
				<p>{ this.state.content }</p>
			</div>
		);
	}
}
