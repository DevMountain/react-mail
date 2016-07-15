import React from "react";

import { getContacts } from "../services/contactsService";

import Contact from "./Contact";

export default class Contacts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			contacts: []
		}
	}
	componentWillMount() {
		this.setState( { contacts: getContacts() } );
	}

	render() {
		const styles = this.getStyles();

		const contacts = this.state.contacts.map( contact => (
			<Contact
				company={ contact.company }
				email={ contact.email }
				key={ contact._id }
				name={ contact.name }
				phone={ contact.phone }
			/>
		) );

		return (
			<div>
				<h1>Contacts</h1>
				<div style={ styles.contactsWrapper }>
					{ contacts }
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			contactsWrapper: {
				display: "flex"
				, flexWrap: "wrap"
				, justifyContent: "space-around"
			}
		}
	}
}
