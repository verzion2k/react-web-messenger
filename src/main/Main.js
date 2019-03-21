import React, { Component } from 'react';
import './sass/Main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchMessage from '../search_message/SearchMessage';
import Nav from '../nav/Nav';
import MessageList from '../message_list/MessageList';

library.add(faBars, faSearch);

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapseNav: false
		};
	}

	handleOnClick = () => {
		const { collapseNav } = this.state;

		this.setState({
			collapseNav: !collapseNav
		});
	};

	render() {
		const { collapseNav } = this.state;
		return (
			<div className="main">
				<section className="main__header">
					<Nav handleOnClick={this.handleOnClick} collapseNav={this.state.collapseNav} />
					<SearchMessage />
				</section>
				<section className={!collapseNav ? 'navbar__collapsed-space' : 'navbar__opened-space'}>
					<MessageList />
				</section>
			</div>
		);
	}
}
