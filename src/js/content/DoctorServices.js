import React from 'react'
import {Component} from 'react'

export class DoctorServices extends Component {
	render() {
		return (
			<div className='services'>
				<table>
			
					<tbody>
						<tr>
							<td><strong>Найменування послуги</strong></td>
							<td><strong>Ціна послуги<br/> грн.</strong></td>
						</tr>
						<tr>
							<td colspan='2'>
								<strong>Консультація сімейного лікаря, розроблення рекомендацій та складання індивідуальної схеми лікування у разі необхідності:</strong>
							</td>
							
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>150</td>
						</tr>

						<tr>
							<td colspan='2'>
								<strong>Електрокардіографія з розшифруванням:</strong>
							</td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>60</td>
						</tr>

						<tr>
							<td colspan='2'>
								<strong>Внутрішньом’язові ін'єкції:</strong>
							</td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>20</td>
						</tr>

						<tr>
							<td colspan='2'>
							<strong>Внутрішньовенні ін'єкції:</strong>
						</td>
					</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>30</td>
						</tr>

						<tr>
							<td colspan='2'>
								<strong>Крапельне внутрішньовенне введення розчинів:</strong>
							</td>
						</tr>
						<tr>
							<td>у кабінеті Надавача</td>
							<td>70</td>
						</tr>
						
						<tr>
							<td >
								<strong>Інгаляції через небулайзер з беродуалом у кабінеті Надавача</strong>
							</td>
							<td>50</td>
						</tr>		

						<tr>
							<td colspan='2'>
								<strong>Швидкі тести на:</strong>
							</td>
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
							<td>Экспресс-тест для діагностики мульти-інфекції (4 види): ВІЛ, гепатит В (HBsAg), гепатит С, сифілис</td>
							<td>250</td>
						</tr>
						<tr>
							<td>Визначення цукру в крові (глюкометром)</td>
							<td>30</td>
						</tr>
						
						<tr>
							<td colspan='2' height='30px'></td>
						</tr>

						<tr>
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