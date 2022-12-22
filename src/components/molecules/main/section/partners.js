import { Component } from "../../../../core";

export class Partners extends Component{
    constructor(){
        super()
        this.partners = [
            {
                src:'../../../../assets/images/main/Банер-Ельск.png',
                alt:'Банер Ельск',
                href:'https://elsk-mebelfab.by/'
            },
            {
                src:'../../../../assets/images/main/byspan.png',
                alt:'BySpan',
                href:'http://span.by/'
            },
            {
                src:'../../../../assets/images/main/BFC.png',
                alt:'BFC',
                href:'https://borwood.by/'
            },
        ]
    }

    render(){
        return`
            ${this.partners.map((partner)=>{
                return`
                    <a href="${partner.href}"><img src="${partner.src}" alt="${partner.alt}"></a>
                `
            }).join('')}
        `
    }
}
customElements.define('main-partners',Partners)