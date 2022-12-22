import { Component } from "../../core";
import '../templates'


export class Suppliers extends Component{
    render(){
        return`
            <template-suppliers></template-suppliers>
        `
    }
}
customElements.define('suppliers-page',Suppliers)