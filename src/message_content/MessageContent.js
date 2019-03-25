import React, { Component } from 'react';
import './sass/MessageContent.scss';
import squares from './img/squares.svg';

export default class MessageContent extends Component {
	render() {
		return (
			<main className="message__content">
				<h1 className="message__content__title">Easily manage your messages on the blockchain</h1>
				<h2 className="message__content__desc">
					Send messages on your computer, then access them on your phone and on the road. Everything you think
					in Fyle is synced automatically to all your devices.
				</h2>
				<img src={squares} alt="squares" className="message__content__image" />
			</main>
		);
	}
}
