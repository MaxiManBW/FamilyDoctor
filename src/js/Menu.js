import * as React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';

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
					</ul>
				</nav>

			</div>
    );
	}
}  	
