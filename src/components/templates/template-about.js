import { Component } from "../../core";
import '../molecules'
import '../organisms'
import './about.scss'

export class TemplateAbout extends Component{
    
    render(){
        return`

        <main>
        <section class="section-about">
            <about-organisation></about-organisation>
            <about-history></about-history>
        </section>
        </main>
        
        `
    }
}

customElements.define('template-about',TemplateAbout)