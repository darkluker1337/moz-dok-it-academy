import { Component } from '../../core'
import '../templates'


export class Vacancies extends Component{
    render(){
        return`
            <template-vacancies></template-vacancies>
        `
    }
}
customElements.define('vacancies-page',Vacancies)