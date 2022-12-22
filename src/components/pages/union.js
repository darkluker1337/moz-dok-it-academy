import { Component } from "../../core";
import '../templates'


export class UnionPage extends Component{
    render(){
        return`
            <template-union></template-union>
        `
    }
}
customElements.define('union-page',UnionPage)