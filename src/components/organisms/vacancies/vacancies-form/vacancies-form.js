import { Component } from "../../../../core";
import './vacancies-form.scss'

export class VacanciesForm extends Component{
    render(){
        return`
        <section class="jobs-form">
            <p>Анкета соискателя — <strong><a href="./doc/Анкета-резюме-ДОК.docx">Скачать анкету</a></strong></p>
            <p>Заполненную анкету просим прислать по одному из следующих адресов:</p>
            <br>
            <p>Мельникова Ирина Борисовна — Заместитель директора — начальник отдела по работе с персоналом</p>
            <p>Email: <strong>melnikova.i@moz-dok.by</strong></p>
            <br>
            <p>Сулимская Светлана Николаевна — Ведущий специалист по работе с персоналом</p>
            <p>Email: <strong>sulimskaya.s@moz-dok.by</strong></p>
            <br>
            <p>Загорец Наталья Григорьевна — Специалист по работе с персоналом</p>
            <p>Email: <strong>zagorec.n@moz-dok.by</strong></p>
        </section>
        `
    }
}
customElements.define('vacancies-form',VacanciesForm)