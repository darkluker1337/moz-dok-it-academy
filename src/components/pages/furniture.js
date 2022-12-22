import { Component } from "../../core";
import '../templates'

export class Furniture extends Component{

    render(){
        return`
        <template-furniture></template-furniture>
        `
    }
}

customElements.define('furniture-page',Furniture)