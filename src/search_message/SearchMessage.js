import React, { Component } from 'react';
import './sass/SearchMessage.scss';
import createMessage from './icons/create-messege.svg';
import search from './icons/search.svg';

export default class SearchMessage extends Component {
	render() {
		return (
			<section className="search">
				<div className="search__form__wrapper">
					<form className="search__form">
						<span className="search__icon">
							<img src={search} alt="search" className="search__icon--size" />
						</span>
						<input type="text" className="search__input" placeholder="Search Messages" />
						<img src={createMessage} alt="search" className="search__image" />
					</form>
				</div>
			</section>
		);
	}
}
