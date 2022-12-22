import { Component } from "../../../../core";
import './sertification.scss'

export class Sertification extends Component{




    static get observedAttributes(){
        return ['items','fslightbox',]
    }

    

    render(){
        const items = JSON.parse(this.props.items)
        const {fslightbox} = this.props
        console.log(items)
        return`
        <div class='sertification'>
            
            <div>
            
                ${items.map((item)=>(`
                <a data-fslightbox="${fslightbox}" target="_blank"  href="${item.img}">
                    <img  src="${item.img}" alt="Сертификат"  width="240" height="auto">
                </a>
                `)).join(' ')}
            </div>
        </div>
        `
    }
}
customElements.define('catalog-sertification',Sertification)