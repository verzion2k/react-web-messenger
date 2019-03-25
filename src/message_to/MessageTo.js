import React, { Component } from 'react';
import './sass/MessageTo.scss';

export default class MessageTo extends Component {
	render() {
		return (
			<section className="message__to">
				<form className="message__to__form">
					<input
						type="text"
						className="message__to__input"
						placeholder="Type the name of the person or group"
					/>
				</form>
			</section>
		);
	}
}
