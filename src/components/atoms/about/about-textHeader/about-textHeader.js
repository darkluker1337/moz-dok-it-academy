import { Component } from "../../../../core";

export class AboutTextHeader extends Component{
    constructor(){
        super()
    }    

    static get observedAttributes(){
        return ['content'];
        }


    render(){
        const {content} = this.props
        return`
        <div class='text-header'>
            <p>
                <strong>${content}</strong>
            </p>
        </div>
            
        `
    }
}
customElements.define('about-textheader',AboutTextHeader)