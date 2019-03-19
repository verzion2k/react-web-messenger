import React, { Component } from 'react';
import settings from './icons/settings.svg';
import save from './icons/save.svg';
import inbox from './icons/inbox.svg';
import chevron from './icons/chevron.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sass/Nav.scss';

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapseNav: false,
			openSelectInput: false
		};
	}

	handleOnClick = () => {
		this.setState({
			collapseNav: !this.state.collapseNav
		});
	};

	handleSelectOnClick = () => {
		this.setState({
			openSelectInput: !this.state.openSelectInput
		});
	};

	render() {
		const { collapseNav, openSelectInput } = this.state;
		return (
			<nav className="navbar">
				<div className="navbar__header">
					<img src={settings} alt="settings" className="navbar__settings" />
					<button
						onClick={this.handleOnClick}
						className={
							!collapseNav ? (
								'navbar__toggle__button'
							) : (
								'navbar__toggle__button navbar__toggle__button--active'
							)
						}
					>
						<FontAwesomeIcon icon="bars" />
					</button>
				</div>

				<ul className={collapseNav ? 'navbar__list' : 'navbar__list d-none'}>
					<li className="navbar__item">
						<img src={inbox} alt="inbox" className="navbar__icon navbar__selected" />
						<p className="navbar__link selected">Inbox</p>
					</li>
					<li className="navbar__item">
						<img src={save} alt="save" className="navbar__icon" />
						<p className="navbar__link">Saved</p>
					</li>
					<li className="navbar__item">
						<img src={save} alt="drafts" className="navbar__icon" />
						<p className="navbar__link">Drafts</p>
					</li>
					<li className="navbar__item">
						<img src={save} alt="sent" className="navbar__icon" />
						<p className="navbar__link">Sent</p>
					</li>
					<li className="navbar__item">
						<img src={save} alt="trash" className="navbar__icon" />
						<p className="navbar__link">Trash</p>
					</li>
					<li className="navbar__item">
						<div className="navbar__theme">
							<select
								className="navbar__theme__select"
								onClick={this.handleSelectOnClick}
								onChange={this.handleSelectOnClick}
							>
								<option value="mint" className="navbar__theme__color">
									Mint...
								</option>
								<option value="red" className="navbar__theme__color">
									Red...
								</option>
								<option value="blue" className="navbar__theme__color">
									Blue...
								</option>
							</select>
							<img
								src={chevron}
								alt="chevron"
								className={
									!openSelectInput ? (
										'navbar__theme__icon'
									) : (
										'navbar__theme__icon navbar__theme__icon--rotate'
									)
								}
							/>
						</div>
					</li>
				</ul>
			</nav>
		);
	}
}
