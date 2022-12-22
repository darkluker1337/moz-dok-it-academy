import { Component } from "../../../../core";
import '../productCatalogImg.scss'

export class ProductsCatalogImg extends Component{

    static get observedAttributes(){
        return ['sri']
    }

    render(){
        const {sri} = this.props
        return`
        <div class="flue-logo" >
            <p><img src="${sri}" alt="flue"></p>
            
        </div>
        `
    }
}
customElements.define('catalog-img',ProductsCatalogImg)