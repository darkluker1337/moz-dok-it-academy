import { Component } from "../../core";

import '../molecules'
import '../organisms'


export class TemplateVacancies extends Component{
    render(){
        return`
            <header-vacancies></header-vacancies>
            <vacancies-list></vacancies-list>
            <vacancies-contacts></vacancies-contacts>
            <vacancies-form></vacancies-form>
        `
    }
}
customElements.define('template-vacancies',TemplateVacancies)