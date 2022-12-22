import { Component } from "../../../../core";
import '../contacts-headers.scss'

export class Forest extends Component{
    render(){
        return`
        <hr class="mini-hr">
        <section class="contact-headers">
            <p><strong>ФИЛИАЛ ОАО «МОЗЫРСКИЙ ДОК»  — ЕЛЬСКИЙ ЛЕСПРОМХОЗ</strong></p>
            
            <p><a href="mailto:info.elph@moz-dok.by">info.elph@moz-dok.by</a></p>
        </section>

        `
    }
}
customElements.define('forest-sellary',Forest)