import { Component } from "../../core";

import '../organisms'
import '../molecules'


export class TemplateContact extends Component{
    render(){
        return`
            <contact-addres></contact-addres>
            <contact-graphic></contact-graphic>
            <contact-table></contact-table>
            <contact-sellary></contact-sellary>
            <sellery-table></sellery-table>
            <contact-elsk></contact-elsk>
            <elksfactory-table></elksfactory-table>
            <forest-sellary></forest-sellary>
            <forest-table></forest-table>
        `
    }
}
customElements.define('template-contacts',TemplateContact)