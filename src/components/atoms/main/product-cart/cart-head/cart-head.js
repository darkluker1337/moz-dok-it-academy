import { Component } from "../../../../../core";

export class CartHead extends Component{
    constructor(){
        super()
    }
    static get observedAttributes(){
        return ['icon'];
        }
    render(){
        const icon = JSON.parse(this.props.icon)
        return`
            <span class="icon">${icon}</span> 
        `
    }
}
customElements.define('cart-head',CartHead)

// &#xe802