import { Component } from "../../core";
import '../templates'


export class Contacts extends Component{
    render(){
        return`
            <template-contacts></template-contacts>
        `
    }
}
customElements.define('contacts-page',Contacts)