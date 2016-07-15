import React from "react";
import { Link } from "react-router";

import { getMessages } from "../services/messageService";

import MessageLink from "./MessageLink";

export default class Inbox extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { messages: [] };
	}
	componentWillMount() {
		this.setState( { messages: getMessages() } );
	}

	render() {
		const styles = this.getStyles();
		const messages = this.state.messages.map( message => (
			<Link
				key={ message._id }
				to={ `/inbox/${ message._id }` }
			>
				<MessageLink
					email={ message.email }
					key={ message._id }
					name={ message.name }
				/>
			</Link>
		) );

		return (
			<div style={ styles.wrapper }>
				<div style={ styles.messageLinkWrapper }>
					{ messages }
				</div>
				<div style={ styles.activeMessageWrapper }>
					{ this.props.children }
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			activeMessageWrapper: {
				border: "1px solid #e0e0e0"
				, display: "inline-block"
				, height: 570
				, flex: 2
			}
			, messageLinkWrapper: {
				 flex: 1
				, height: 570
				, overflow: "scroll"
			}
			, wrapper: {
				display: "flex"
				, marginTop: 20
			}
		}
	}
}
