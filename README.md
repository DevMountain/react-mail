## React Mail

### Objectives
Become comfortable with routing and lifecycle methods.

## Step 1: Router set up.

Before starting to code, browse through the provided components and become familiar with the structure. Each component is provided pre-built and will be modified throughout the project.

Begin by setting up imports, you will need access to the usual React and ReactDOM as well as the following:

* `Router`, `Route`, and `browserHistory` from React Router.
* From the components directory:
    * `App`
    * `Inbox`
    * `Message`
    * `Draft`
    * `Contacts`

Render a router onto the div with the id of `react-node`. The router should:

* Implement `browserHistory`
* Have a root route to the path `"/"` handled by the `App` component.
* The root route should have three sub-routes of `"draft"`, `"contacts"`, and `"inbox"`. Handled by the appropriate components.
* The inbox route should have a sub-route with a parameter of `messageId`, handled by the `Message` component.

Your code should look something like this:

``` jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import Inbox from "./components/Inbox";
import Message from "./components/Message"
import Draft from "./components/Draft";
import Contacts from "./components/Contacts";

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "react-node" );

	if ( reactNode ) {
		ReactDOM.render(
			<Router history={ browserHistory }>
				<Route path="/" component={ App }>
					<Route path="draft" component={ Draft } />
					<Route path="contacts" component={ Contacts } />
					<Route path="inbox" component={ Inbox }>
						<Route path="/inbox/:messageId" component={ Message } />
					</Route>
				</Route>
			</Router>
		, reactNode )
	}
} );
```

Inside of your `App` component's render method, display its children beneath the header. Like this:

``` jsx
// App.js
render() {
	return (
		<div>
			<Header />
			{ this.props.children }
		</div>
	);
}
```

Our router is now set up and ready for use, we just need to configure each individual component to get the data necessary and navigate the application.

## Header Component

Our Header component will serve as a navigation bar for the application, so we'll start here.

* Begin by importing the `Link` component from React Router.
* Use the Link component to wrap the `h1` element with a link to the root route.
* In the `div` just below the `header` closing tag add links to inbox, draft, and contacts.
* Wrap the text of the inbox, draft, and contacts links in `span`'s with styles of `styles.link`.

Your render method's JSX should look something like this:

``` jsx
<header style={ styles.wrapper }>
		<div>
			<img
				alt="React Logo"
				src="assets/react-logo.svg"
				style={ styles.logoImage }
			/>
			<Link to="/"><h1 style={ styles.header }>rMail</h1></Link>
		</div>

		<div>
			<Link to="/inbox">
				<span style={ styles.link }>Inbox</span>
			</Link>
			<Link to="/draft">
				<span style={ styles.link }>Draft</span>
			</Link>
			<Link to="/contacts">
				<span style={ styles.link }>Contacts</span>
			</Link>
		</div>
</header>
```

## Contact(s) Components

Our Contacts component will display a list of contacts provided by `contactsService`.

* Import `getContacts` from `contactsService`.
* Using a lifecycle method, get the contacts and place them on state before the component mounts.
* Create an array of `Contact` components. Each contact should be passed a company, email, name, and phone property.
* Render the array of contacts inside of the `div` with the style of `contactsWrapper`.
* Inside of the `Contact` component, simply update the commented out fields to display the correct data.

Your code should look something like this:

``` jsx
// Contacts.js
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
		return { /* */ }
	}
}
```

``` jsx
// Contact.js
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
		return { /* */ }
	}
}
```

## Draft Component

The draft component needs very little work. Simply add a `sendMessage` method that takes in an `event` and prevents the default HTML action, then re-directs the browser back to "/inbox" using `browserHistory`. This function should fire when the send button is clicked.

``` jsx
import React from "react";
import { browserHistory } from "react-router";

export default class Draft extends React.Component {
	sendMessage( event ) {
		event.preventDefault();

		browserHistory.push( "/inbox" );
	}
	render() {
		return (
		// inputs and textarea.
		<button
			onClick={ this.sendMessage }
			style={ styles.sendButton }
		>
			Send
		</button>
		// rest of render
	}
	// rest of class
```

## Inbox and MessageLink Components
 The Inbox component will display a list of `MessageLink` components on the left, and its sub-route displaying the message content on the right.
 
* Display the component's children inside the `div` with the style of `activeMessageWrapper`.
* Import `getMessages` from `messageService` and put the messages on state before the component mounts using a lifecycle method.
* Import the `MessageLink` component and create an array of message links.
	* Each JSX element in the array should be wrapped in a `Link` tag pointing to inbox's sub-route, passing the message `_id` as the route parameter.
	* Each `MessageLink` should be passed properties of email and name.
* Render this array inside the `div` with the style of `messageLinkWrapper`.
* Update the render method of `MessageLink` to display the proper data in place of the comments.

Your components should look something like this:

``` jsx
// Inbox.js
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
		return { /* */ }
	}
}
```

``` jsx
// MessageLink.js - Just the render method JSX
<div style={ styles.wrapper }>
	<h3>{ this.props.name }</h3>
	
	{ this.props.email }
</div>
```

## Message Component

Our message component will make use of lifecycle methods to ensure its data is up to date and displaying properly.

* Update the commented out sections of the render method to look to state for their values.
* Import `findMessageById` from `messageService`.
* Create a new method named `getMessage` that takes in a `messageId` parameter, finds a message by ID, and places that message on state.
* Using a lifecycle method, call your `getMessage` method before the component mounts.
* Using a lifecycle method, determine whether the component needs to re-call `getMessage`. Look to the route params to determine this.

Your code should look something like this:
``` jsx
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
```

___

___

### Black Diamonds:

* Turn each `Contact` component into a link that will take you to a new route that displays the individual contact's data.
* Update the `Draft` component so that messages are saved to `App`'s state when the send button is clicked, and add a route to view sent messages.
* Move the data from `messageService` and `contactsService` into a simple node API or JSON file and use [axios](https://www.npmjs.com/package/axios) or [superagent](https://www.npmjs.com/package/superagent) to fetch the data via HTTP.


## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">