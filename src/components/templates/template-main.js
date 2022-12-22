import { Component } from "../../core";
import '../molecules'
import '../organisms'

export class TemplateMain extends Component{
    render(){
        return`
            <product-contant></product-contant>
            <main-section ></main-section>
        `
    }
}
customElements.define('template-main',TemplateMain)