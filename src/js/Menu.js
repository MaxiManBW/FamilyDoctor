import * as React from 'react'
import { Component } from 'react'
import {Link} from 'react-router-dom'
// import '../style/css/btn.css'

export class Menu extends Component {

  render() {
    return (
			<div className="menu">
				
				<nav>
					<ul className="round">
						{this.props.menuName.map((place, index) => (
							
								<Link to={place.path} className="item" key={index}>
									<li key={index}>
										{place.name}
									</li>
								</Link>
						))}
						<a class='item' href='https://patient.medcard24.net/' target='RegistrationOnMedcard24' > 
							<li>Запис до лікаря</li>
						</a>
					</ul>
				</nav>

			</div>
    )
	}
}  	
