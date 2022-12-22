import { Component } from "../../../../core";
import './plate-h.scss'

export class PlateH extends Component{
    render(){
        return`
        <div class="adantage-name">
            <p>
                <strong>Основные преимущества плит «БЕЛТЕРМО»</strong>
            </p>
        </div>
        `
    }
}
customElements.define('palte-h',PlateH)