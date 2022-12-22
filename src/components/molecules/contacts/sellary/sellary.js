import { Component } from "../../../../core";
import '../contacts-headers.scss'

export class Sellary extends Component{
    render(){
        return`
        <hr class="mini-hr">
        <section class="contact-headers">
        <p><strong>ОТДЕЛ ПРОДАЖ</strong></p>
        </section>

        `
    }
}
customElements.define('contact-sellary',Sellary)