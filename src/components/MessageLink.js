import React from "react";

export default class MessageLink extends React.Component {
	render() {
		const styles= this.getStyles();

		return (
			<div style={ styles.wrapper }>
				<h3>{ /* message name */ }</h3>

				{ /* message email */ }
			</div>
		);
	}

	getStyles() {
		return {
			wrapper: {
				alignItems: "baseline"
				, border: "1px solid #e0e0e0"
				, borderRadius: 4
				, display: "flex"
				, justifyContent: "space-between"
				, margin: 10
				, padding: 10
				, width: "95%"
			}
		}
	}
}
