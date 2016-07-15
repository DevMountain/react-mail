import React from "react";

export default class Inbox extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { messages: [] };
	}

	render() {
		const styles = this.getStyles();

		return (
			<div style={ styles.wrapper }>
				<div style={ styles.messageLinkWrapper }>

				</div>
				<div style={ styles.activeMessageWrapper }>

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
