import { Component } from "../../core";

export class TemplateFurniture extends Component{
    render(){
        return`
            <furniture-section></furniture-section>
        `
    }
}
customElements.define('template-furniture',TemplateFurniture)