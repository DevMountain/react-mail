import React from "react";

import Contact from "./Contact";

export default class Contacts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			contacts: []
		}
	}

	render() {
		const styles = this.getStyles();

		return (
			<div>
				<h1>Contacts</h1>
				<div style={ styles.contactsWrapper }>

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
