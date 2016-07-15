import React from "react";

export default class Draft extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
			<div>
				<h1>New Message</h1>
				<form style={ styles.form }>
					<input
						placeholder="To: person@email.com"
						style={ styles.input }
						type="text"
					/>

					<input
						placeholder="cc: person@email.com"
						style={ styles.input }
						type="text"
					/>

					<input
						placeholder="bcc: person@email.com"
						style={ styles.input }
						type="text"
					/>

					<input
						placeholder="Subject"
						style={ styles.input }
						type="text"
					/>

					<textarea
						cols="50"
						rows="17"
						style={ styles.draft }
					/>

					<button style={ styles.sendButton }>
						Send
					</button>
				</form>

			</div>
		);
	}

	getStyles() {
		return {
			draft: {
				resize: "none"
				, width: "100%"
			}
			, form: {
				margin: "0 auto"
				, width: "90%"
			}
			, input: {
				border: "1px solid #e0e0e0"
				, borderRadius: 3
				, height: 28
				, marginBottom: 5
				, width: "100%"
			}
			, sendButton: {
				backgroundColor: "#00d8ff"
				, border: "1px solid #e0e0e0"
				, color: "white"
				, fontWeight: "bold"
				, height: 40
				, width: 100
			}
		}
	}
}
