import React from "react";

export default class Contact extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
			<ul style={ styles.contactWrapper }>
				<li style={ styles.name }>{ this.props.name }</li>
				<li>Company: { this.props.company }</li>
				<li>Email: { this.props.email }</li>
				<li>: Phone #: { this.props.phone }</li>
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
