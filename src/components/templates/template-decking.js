import { Component } from "../../core"



export class TemplateDecking extends Component{
    render(){
        return`
            <decking-section></decking-section>
        `
    }
}
customElements.define('template-decking',TemplateDecking)