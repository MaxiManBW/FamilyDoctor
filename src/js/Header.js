import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../style/img/logo.png';

export class Header extends Component {

  render() {
    return (
		<div className="header">
			<div className="img-logo-invisible">
				{/* <img src={logo} alt=""/> */}
			</div>
			
		
			<div className="name">	
				<h1>Лікар загальної практики - сімейний лікар</h1>
				{/* <h1>Анна Солодун</h1> */}
			</div>
		
			<div className="phone">
				<a href="/contact/#map">
					<p>Товариська 56/Ладозька 25</p>
					<p>Запоріжжя</p>
				</a> 
				<p><strong><a href="tel:+3 (8061) 707 37 11">тел. 707 37 11</a></strong></p>
				<p><strong><a href="tel:+3 (8094) 920 77 11">моб. 094 920 77 11</a></strong></p>
			</div>

		</div>
    );
	}
}  	