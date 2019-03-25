import React, { Component } from 'react';
import settings from './icons/settings.svg';
import save from './icons/save.svg';
import trashcan from './icons/trashcan.svg';
import drafts from './icons/drafts.svg';
import inbox from './icons/inbox.svg';
import sent from './icons/sent.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sass/Nav.scss';
import Select from 'react-select';

const colourStyles = {
	control: (styles) => ({
		...styles,
		background: '#F6F6F6'
	}),
	singleValue: (styles) => ({
		...styles,
		fontFamily: 'Rubik',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 12,
		lineHeight: 'normal',
		color: '#BDBDBD'
	}),
	dropdownIndicator: (styles, state) => ({
		...styles,
		color: '#BDBDBD',
		transition: 'all 0.3s ease',
		transform: state.selectProps.menuIsOpen ? 'rotate(0deg)' : 'rotate(90deg)'
	}),
	indicatorSeparator: () => ({
		width: 0
	}),
	option: (styles, state) => ({
		...styles,
		color: '#BDBDBD',
		background: state.isSelected ? 'red' : '#F6F6F6'
	})
};

export default class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colourOptions: [
				{ value: 'mint', label: 'Mint...', color: '#6fcf97' },
				{ value: 'red', label: 'Red...', color: 'red' },
				{ value: 'blue', label: 'Blue...', color: 'blue' }
			]
		};
	}

	render() {
		const { colourOptions } = this.state;
		const { collapseNav, handleOnShow } = this.props;
		console.log(colourOptions[0].color);
		return (
			<nav className="navbar">
				<header className="navbar__header">
					<img src={settings} alt="settings" className="navbar__settings" onClick={handleOnShow} />
					<button
						onClick={this.props.handleOnClick}
						className={
							!collapseNav ? (
								'navbar__toggle__button'
							) : (
								'navbar__toggle__button navbar__toggle__button--active'
							)
						}
					>
						<FontAwesomeIcon icon="bars" color="#f2f2f2" size="lg" />
					</button>
				</header>

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
						<img src={drafts} alt="drafts" className="navbar__icon" />
						<p className="navbar__link navbar__link__drafts">Drafts</p>
					</li>
					<li className="navbar__item">
						<img src={sent} alt="sent" className="navbar__icon" />
						<p className="navbar__link">Sent</p>
					</li>
					<li className="navbar__item">
						<img src={trashcan} alt="trash" className="navbar__icon" />
						<p className="navbar__link">Trash</p>
					</li>
					<li className="navbar__item">
						<div className="navbar__theme">
							<Select
								options={colourOptions}
								defaultValue={colourOptions[0]}
								styles={colourStyles}
								className="react-select"
								classNamePrefix="react-select"
							/>
						</div>
					</li>
				</ul>
			</nav>
		);
	}
}
