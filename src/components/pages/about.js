import { Component } from "../../core";
import '../templates'

export class About extends Component{
    constructor(){
        super()
    }
    render(){
        return`
        <template-about></template-about>
        `
    }
}

customElements.define('about-page',About)


