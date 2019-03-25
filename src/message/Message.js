import React, { Component } from 'react';
import message from './img/message_img.svg';
import './sass/Message.scss';

export default class Message extends Component {
	render() {
		const { title, number, desc, active, activeWrapper, handleOnShow } = this.props;
		return (
			<li className={activeWrapper ? activeWrapper : 'message__wrapper'} onClick={handleOnShow}>
				<article className="message">
					<header className="message__header">
						<span className={active} />
						<h2 className="message__title">{title}</h2>
						<p className="message__number">{number}</p>
					</header>

					<main className="message__main">
						<p className="message__desc">{desc}</p>
					</main>

					<footer className="message__footer">
						<figure className="message__img">
							<img src={message} alt="message" />
						</figure>
					</footer>
				</article>
			</li>
		);
	}
}
