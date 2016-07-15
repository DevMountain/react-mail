import React from "react";

export default class Contact extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
			<ul style={ styles.contactWrapper }>
				<li style={ styles.name }>{ /* contact name */ }</li>
				<li>Company: { /* contact company */ }</li>
				<li>Email: { /* contact email */ }</li>
				<li>: Phone #: { /* contact phone */ }</li>
			</ul>
		);
	}

	getStyles() {
		return {
			contactWrapper: {
				margin: 10
			}
			, name: {
				fontWeight: "bold"
			}
		}
	}
}
