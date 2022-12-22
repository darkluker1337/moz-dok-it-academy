import { Component } from "../../core";
import '../molecules'

export class TemplateStock extends Component{
    render(){
        return`
            <stock-card></stock-card>
        `
    }
}
customElements.define('template-stock',TemplateStock)