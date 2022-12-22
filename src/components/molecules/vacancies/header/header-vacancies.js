import { Component } from "../../../../core";
import './header-vacancies.scss'

export class HeaderVacancies extends Component{
    render(){
        return`
        <section class="jobs-header">
            <p><strong>Вакансии</strong></p> 
        </section>
        <hr class="mini-hr">
        `
    }
}
customElements.define('header-vacancies',HeaderVacancies)