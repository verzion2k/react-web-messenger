import React, { Component } from 'react';
import Nav from '../nav/Nav';
import './sass/Main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

export default class Main extends Component {
	lib;
	render() {
		return <Nav />;
	}
}
