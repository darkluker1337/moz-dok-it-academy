import { Component } from "../../core";

import '../molecules'
import '../organisms'


export class TemplateUnion extends Component{
    render(){
        return`
        <union-chairman></union-chairman>
        <position-name></position-name>
        <revisor-comision></revisor-comision>
        <union-partners></union-partners>
        `
    }
}
customElements.define('template-union',TemplateUnion)