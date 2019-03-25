import React, { Component } from 'react';
import './sass/Footer.scss';
import info from './icons/info.svg';
import share from './icons/share.svg';

export default class Footer extends Component {
	render() {
		return (
			<section className="footer__icon__list">
				<img src={info} alt="info" className="footer__icon" />
				<img src={share} alt="share" className="footer__icon" />
			</section>
		);
	}
}
