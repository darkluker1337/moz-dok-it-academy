import { Component } from "../../../../core";
import '../contacts-headers.scss'

export class Graphic extends Component{
    render(){
        return`
        <section class="contact-headers">
            <p><strong>График работы заводоуправления</strong></p>
            <p>Понедельник-Четверг: 8:00-17:00</p>
            <p>Пятница: 8:00-16:00</p>
            <p>Обеденный перерыв: 12:30-13:18</p>  
        </section>
        <hr class='mini-hr'>
        <section class="contact-headers">
            <p><strong>Контактные телефоны</strong></p>
            <p><strong>ОТДЕЛ ПО РАБОТЕ С ПЕРСОНАЛОМ</strong></p>
            <p>+375 (236) 20-41-81</p>    
        </section>
        `
    }
}
customElements.define('contact-graphic',Graphic)