import React from 'react';
import {Component} from 'react';

export class DoctorServices extends Component {
	render() {
		return (
			<div className="services">
			<table>
					<tbody>
						<tr>
							<td>№</td>
							<td>Найменування послуги</td>
							<td>Ціна послуги <br/>
								грн.
							</td>
						</tr>
						<tr>
							<td rowspan="3">1</td>
							<td >
								<strong>Консультація сімейного лікаря, розроблення рекомендацій та складання індивідуальної схеми лікування у разі необхідності:</strong>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>150</td>
						</tr>
						<tr>
							<td>за місцем проживання Клієнта</td>
							<td>200</td>
						</tr>

						<tr>
							<td rowspan="3">2</td>
							<td >
								<strong>Електрокардіографія з розшифруванням:</strong>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>60</td>
						</tr>
						<tr>
							<td>за місцем проживання Клієнта</td>
							<td>100</td>
						</tr>

						<tr>
							<td rowspan="3">3</td>
							<td >
								<strong>Внутрішньом’язові ін'єкції:</strong>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>20</td>
						</tr>
						<tr>
							<td>за місцем проживання Клієнта</td>
							<td>30</td>
						</tr>

						<tr>
							<td rowspan="3">4</td>
							<td >
								<strong>Внутрішньовенні ін'єкції:</strong>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>30</td>
						</tr>
						<tr>
							<td>за місцем проживання Клієнта</td>
							<td>50</td>
						</tr>

						<tr>
							<td rowspan="3">5</td>
							<td >
								<strong>Крапельне внутрішньовенне введення розчинів:</strong>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>70</td>
						</tr>
						<tr>
							<td>за місцем проживання Клієнта</td>
							<td>100</td>
						</tr>
						
						<tr>
							<td>6</td>
							<td >
								<strong>Інгаляції через небулайзер з беродуалом у кабінеті Надавача</strong>
							</td>
							<td>50</td>
						</tr>		

						<tr>
							<td rowspan="8">7</td>
							<td >
								<strong>Швидкі тести на:</strong>
							</td>
							<td></td>
						</tr>
						<tr>
							<td>Вагітність</td>
							<td>80</td>
						</tr>
						<tr>
							<td>ВІЛ</td>
							<td>100</td>
						</tr>
						<tr>
							<td>Гепатити В, С</td>
							<td>100</td>
						</tr>
						<tr>
							<td>Сифілис</td>
							<td>100</td>
						</tr>
						<tr>
							<td>Тропоніни, міоглобін,КК-МВ</td>
							<td>250</td>
						</tr>
						<tr>
							<td>Экспресс-тест для діагностики мульти-інфекциї (4 види): ВІЛ, гепатит В (HBsAg), гепатит С, сифілис</td>
							<td>250</td>
						</tr>
						<tr>
							<td>Визначення цукру крові (глюкометром)</td>
							<td>30</td>
						</tr>
						
						<tr>
							<td>8</td>
							<td >
								<strong>Видача довідок</strong>
							</td>
							<td>150</td>
						</tr>
					
					</tbody>
				</table>

				
			</div>
		)
	}
}