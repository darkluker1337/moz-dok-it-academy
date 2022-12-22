import { Component } from "../../../../core";
import './union-partners.scss'

export class UnionPartners extends Component{
    render(){
        return`
        <div class="union-partners">
        <ul class="positions-partners">
            <li>
                <a href="">Белорусский профессиональный союз работников леса и природопользования</a>
            </li>
            <li>
                <a href="">Гомельская областная организация белорусского профсоюза работников леса и природопользования</a>
            </li>
        </ul>
        </div>
        `
    }
}
customElements.define('union-partners',UnionPartners)