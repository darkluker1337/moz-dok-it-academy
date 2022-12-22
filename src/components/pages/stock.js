import { Component } from "../../core";
import '../templates'

export class Stock extends Component{
    render(){
        return`
            <template-stock></template-stock>
        `
    }
}
customElements.define('stock-page',Stock)