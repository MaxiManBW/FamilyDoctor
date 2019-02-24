import React from 'react';
import {Component} from 'react';
import logo_mail from '../../style/img/contacts/ico-mail.svg';
import logo_phone from '../../style/img/contacts/ico-phone.svg';

export class Contact extends Component {
	render() {
		return (
			<div>
				<div className="contacts">
					<div className="contact-item">
						<a href="mailto:family.doctor.zp.ua@gmail.com">	
							<img src={logo_mail} alt=""/>
							<p>family.doctor.zp.ua@gmail.com</p>
						</a>
					</div>
					<div className="contact-item">
						<a href="tel:+3 (8094) 920 77 11">
							<img src={logo_phone} alt=""/>
							<p>Мобільний - 094 920 77 11</p>
						</a>
					</div>
					<div className="contact-item">
						<a href="tel:+3 (8061) 707 37 11">
							<img src={logo_phone} alt=""/>
							<p>Телефон - 707 37 11</p>
						</a>
					</div>
				</div>

				<div>
				
					<a name="map"/>
					<iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1891.836430323204!2d35.064626699208084!3d47.88876704989663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m3!3m2!1d47.8882303!2d35.065066699999996!4m0!5e0!3m2!1suk!2sua!4v1538386490336" title="Місцезнаходження сімейного лікара Анна Солодун" width="100%" height="450" ></iframe>
				</div>
			</div>
		)
	}
}
