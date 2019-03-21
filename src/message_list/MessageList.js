import React, { Component } from 'react';
import './sass/MessageList.scss';
import Message from '../message/Message';

export default class MessageList extends Component {
	render() {
		return (
			<div>
				<Message
					title="Customer Satisfaction"
					number="1.2k"
					desc="Great to hear from you the other day! Would you like..."
					active="message__active"
					activeWrapper="message__wrapper__active"
				/>
				<Message
					title="Net Promoter Score"
					number="1.8k"
					desc="Great to hear from you the other day! Would you like..."
				/>
				<Message title="User Poll" number="5k" desc="Great to hear from you the other day! Would you like..." />
				<Message
					title="Market Research"
					number="3.2k"
					desc="Great to hear from you the other day! Would you like..."
				/>
				<Message
					title="Engagment Results"
					number="1.1k"
					desc="Great to hear from you the other day! Would you like..."
				/>
				<Message
					title="Engagment Results"
					number="1.1k"
					desc="Great to hear from you the other day! Would you like..."
				/>
			</div>
		);
	}
}
