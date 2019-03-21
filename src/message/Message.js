import React, { Component } from 'react';
import message from './img/message_img.svg';
import './sass/Message.scss';

export default class Message extends Component {
	render() {
		const { title, number, desc, active, activeWrapper } = this.props;
		return (
			<section className={activeWrapper ? activeWrapper : 'message__wrapper'}>
				<article className="message">
					<span className={active} />
					<h2 className="message__title">{title}</h2>
					<h3 className="message__number">{number}</h3>
					<p className="message__desc">{desc}</p>
					<figure className="message__img">
						<img src={message} alt="message" />
					</figure>
				</article>
			</section>
		);
	}
}
