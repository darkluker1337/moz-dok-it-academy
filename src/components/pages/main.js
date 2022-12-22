import { Component } from "../../core";
import '../templates'


export class Home extends Component{
    render(){
        return`
            <template-main></template-main>
        `
    }
}
customElements.define('home-page',Home)