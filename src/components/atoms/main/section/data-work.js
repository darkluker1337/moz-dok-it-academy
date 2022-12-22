import { Component } from "../../../../core";
import './data-work.scss'

export class PersonalDataWork extends Component{
    render(){
        return`
        <div class="politic">
            <p>
                <a href="../../../../assets/images/pdf/638_02.12.2021.pdf" target="_blank">Политика обработки персональных данных</a>
            </p>
        </div>
        `
    }
}
customElements.define('personal-data-work',PersonalDataWork)