import React from 'react';
import {Component} from 'react';

export class Recording extends Component {
	render() {
		return (
			<div>
				<div>Форма запису на прийом</div>
				<div>Прізвище<input type="text"/></div>
				<div>Ім'я<input type="text"/></div>
				<div>По батькові<input type="text"/></div>
				<div>№ телефону<input type="phone"/></div>
				<div>Ваш email<input type="email"/></div>
				<div>Дата<input type="date"/></div>
				<div>Час<input type="time"/></div>
				
				<div><button>Записатись</button></div>
			</div>
		)
	}
}