import { Component } from "../../core";
import '../templates'

export class Products extends Component{
    render(){
        return`
            <template-products></template-products>
        `
    }
}
customElements.define('products-page',Products)