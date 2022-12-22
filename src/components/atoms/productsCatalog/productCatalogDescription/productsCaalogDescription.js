import { Component } from "../../../../core";
import '../productCatalogDescription.scss'


export class ProductsCatalogDescription extends Component{

    static get observedAttributes(){
        return ['text']
    }

    render(){
        const {text} = this.props
        return`
            <div class="flue-description">
                <p>${text}</p>
            </div>
        `
    }
}
customElements.define('catalog-description',ProductsCatalogDescription)