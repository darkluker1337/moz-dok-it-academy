import { Component } from "../../../../core";
import './vacancies-cintacts.scss'

export class VacanciesContacts extends Component{
    render(){
        return`
        <section class="jobs-contacts">
            <p><strong>Справка по тел.:</strong></p>
            <br>
            <p>20-41-81 (отдел по работе с персоналом)</p>
            <p>37-54-49 (зам. директора — начальник отдела по работе с персоналом)</p>
        </section>
        <hr>
        `
    }
}
customElements.define('vacancies-contacts',VacanciesContacts)