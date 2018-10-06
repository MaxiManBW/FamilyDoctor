import * as React from 'react';
import { Component } from 'react';
import logo from '../style/img/logo.svg';

export class Header extends Component {

  render() {
    return (
		<div className="header">
			
			<div className="img-logo">
				<img src={logo} alt=""/>
			</div>
		
			<div className="name">
				<h1>Лікар загальної практики - сімейний лікар</h1>
				<h1>Анна Солодун</h1>
			</div>
		
			<div className="phone">
				<p>Товариська 56/Ладозька 25 </p>
				<p>Запоріжжя</p>
				<p><strong>707 37 11</strong></p>
				<p><strong>094 920 77 11</strong></p>
			</div>

		</div>
    );
	}
}  	