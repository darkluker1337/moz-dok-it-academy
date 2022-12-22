import { Component } from "../../../../core";

export class AboutImg extends Component{
    constructor(){
        super()
    }

    static get observedAttributes(){
        return ['src','alt'];
        }
    
    render(){
        const {src,alt} = this.props
        return`
        <div class="hard-work">
            <img src="${src}" alt="${alt}" >
        </div>
        `
    }
}
customElements.define('about-img',AboutImg)