import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Component } from 'react';
import '../style/css/app.css';
import { Header } from './Header';
import { Menu } from './Menu';

import { Contact } from './content/Contact';
import { NewsAndShares } from './content/NewsAndShares';
import { Recording } from './content/Recording';
import { DoctorServices } from './content/DoctorServices';
import { Staff } from './content/Staff';
import { Vacancy } from './content/Vacancy';
import { Info } from './content/Info';
import { Main }  from './content/Main';


const MENU_NAMES = [
	{name: "Головна", path: "/"},
	{name: "Послуги", path: "/services"},
	{name: "Персонал", path: "/staff"},
	// {name: "Новини та Акції", path: "/news_shares"},
	{name: "Контакти", path: "/contact"},
	{name: "Інформація", path: "/info"},
	// {name: "Вакансії", path: "/vacancy"},
	{name: "Запис до лікаря", path: "/recording"}
] 

export class App extends Component {
	
  render() {
    return (
			<Router>
			<div className="app">
				<div className="main-header"> 
					<Header />
				</div>
				
				<div className="navigation">
					<Menu menuName={MENU_NAMES}/>
				</div>

				<div className="body">
					<Route exact path="/" component={Main}/>
					<Route path="/services" component={DoctorServices}/>
					<Route path="/staff" component={Staff}/>
					{/* <Route path="/news_shares" component={NewsAndShares}/> */}
					{/* <Route path="/vacancy" component={Vacancy}/> */}
					<Route path="/contact" component={Contact}/>
					<Route path="/info" component={Info}/>
					<Route path="/recording" component={Recording}/>
				</div>
				{/* <div className="footer">FOOTER</div> */}
			</div>
			</Router>
    );
	}
}  		
