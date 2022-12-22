import { Component } from "../../core";
import '../templates'

export class Decking extends Component{

    render(){
        return`
        <template-decking></template-decking>
        `
    }
}

customElements.define('decking-page',Decking)