import * as React from 'react'
import { Component } from 'react'
// import logo from '../style/img/logo.png'

export class Header extends Component {

  render() {
    return (
		<div className='header'>
			<div className='img-logo-invisible'>
				{/* <img src={logo} alt=''/> */}
			</div>
			
			<div className='name'>	
				<h1>Лікар загальної практики - сімейний лікар</h1>
				{/* <h1>Анна Солодун</h1> */}
			</div>
		
			<div className='phone'>
				<p><strong><a href='tel:+3 (8061) 707 37 11'>тел. 707 37 11</a></strong></p>
				<p><strong><a href='tel:+3 (8094) 920 77 11'>моб. 094 920 77 11</a></strong></p>
				<p><strong><a href='tel:+3 (8050) 920 77 11'>моб. 050 920 77 11</a></strong></p>
				<p><strong><a href='tel:+3 (8067) 920 77 11'>моб. 067 920 77 11</a></strong></p>
				<a href='/contact/#map'>
					<p><strong>Товариська 56/Ладозька 25 м.Запоріжжя</strong></p>
				</a>		
			</div>

		</div>
    )
	}
}  	