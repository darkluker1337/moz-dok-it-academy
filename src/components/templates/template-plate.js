import { Component } from "../../core";


export class TemplatePlate extends Component{
    render(){
        return`
            <plate-img></plate-img>
            <flex-plate></flex-plate>
            <plate-section></plate-section>
        `
    }
}
customElements.define('template-plate',TemplatePlate)