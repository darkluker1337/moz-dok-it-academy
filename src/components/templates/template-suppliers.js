import { Component } from "../../core";

import '../molecules/'
import '../organisms/'


export class TemplateSuppliers extends Component{
    render(){
        return`
            <suppliers-introduce></suppliers-introduce>
            <suppliers-table></suppliers-table>
        `
    }
}
customElements.define('template-suppliers',TemplateSuppliers)