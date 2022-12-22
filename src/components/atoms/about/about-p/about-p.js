import { Component } from "../../../../core";

export class AboutP extends Component{
    constructor(){
        super()
    }
    static get observedAttributes(){
        return ['text'];
        }
    render(){
        const text = JSON.parse(this.props.text)
        console.log(text)
        return`
            ${text.map((item)=>(`
            <p>${item.paragraphs}</p>
            <br>
        `)).join(' ')}
        `
    }
}
customElements.define('about-p',AboutP)