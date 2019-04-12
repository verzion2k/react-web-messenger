import React, { Component } from 'react';
import './sass/Main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchMessage from '../search_message/SearchMessage';
import Nav from '../nav/Nav';
import MessageList from '../message_list/MessageList';
import Footer from '../footer/Footer';
import MessageContent from '../message_content/MessageContent';
import MessageTo from '../message_to/MessageTo';
import Media from 'react-media';

library.add(faBars, faSearch);

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapseNav: false,
			showMessage: false
		};
	}

	handleOnClick = () => {
		const { collapseNav } = this.state;

		this.setState({
			collapseNav: !collapseNav
		});
	};

	handleOnShow = () => {
		const { showMessage } = this.state;

		this.setState({
			showMessage: !showMessage
		});
	};

	render() {
		const { collapseNav, showMessage } = this.state;
		return (
			<main className={showMessage ? 'main-max' : 'main'}>
				<header className="main__header">
					<Nav
						handleOnClick={this.handleOnClick}
						collapseNav={this.state.collapseNav}
						handleOnShow={this.handleOnShow}
					/>
				</header>

				<Media query="(min-width: 1200px)">
					{(matches) =>
						matches ? (
							<React.Fragment>
								<aside className="main__content">
									<SearchMessage />
									<MessageList />
								</aside>

								<section className="main__messages">
									<MessageTo />
									<MessageContent />
								</section>
							</React.Fragment>
						) : (
							<aside className={!collapseNav ? 'main__content' : 'main__content main__content--margin'}>
								{showMessage ? <MessageTo /> : <SearchMessage />}
								{showMessage ? <MessageContent /> : <MessageList handleOnShow={this.handleOnShow} />}
							</aside>
						)}
				</Media>
				<footer className="main__footer">
					<Footer />
				</footer>
			</main>
		);
	}
}
