import React, { Component } from 'react';
import './sass/Main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchMessege from '../search_messege/SearchMessege';
import Nav from '../nav/Nav';

library.add(faBars, faSearch);

export default class Main extends Component {
	lib;
	render() {
		return (
			<div>
				<Nav />
				<SearchMessege />
			</div>
		);
	}
}
