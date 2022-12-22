import { Component } from "../../core";
import '../templates'

export class Plate extends Component{

    render(){
        return`
        <template-plate></template-plate>
        `
    }
}

customElements.define('plate-page',Plate)