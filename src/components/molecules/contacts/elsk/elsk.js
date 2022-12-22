import { Component } from "../../../../core";
import '../contacts-headers.scss'

export class Elsk extends Component{
    render(){
        return`
        <hr class="mini-hr">
        <section class="contact-headers">
            <p><strong>ФИЛИАЛ ОАО «МОЗЫРСКИЙ ДОК» — ЕЛЬСКАЯ МЕБЕЛЬНАЯ ФАБРИКА</strong></p>
            <p><a href="mailto:info.emf@moz-dok.by">info.emf@moz-dok.by</a></p>
        </section>
        
        `
    }
}
customElements.define('contact-elsk',Elsk)