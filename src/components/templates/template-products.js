import { Component } from "../../core";
import '../molecules'

export class TemplateProducts extends Component{
    render(){
        return`
            <products-view></products-view>
        `
    }
}
customElements.define('template-products',TemplateProducts)