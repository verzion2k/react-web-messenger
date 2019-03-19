import React, { Component } from 'react';
import './sass/SearchMessege.scss';
import search from './icons/create-messege.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SearchMessege extends Component {
	render() {
		return (
			<section className="search">
				<div className="search__form__wrapper">
					<form className="search__form">
						<span className="search__icon">
							<FontAwesomeIcon icon="search" color="#bdbdbd" />
						</span>
						<input type="text" className="search__input" placeholder="Search Messages" />
						<img src={search} alt="search" className="search__image" />
					</form>
				</div>
			</section>
		);
	}
}
