import { Component } from "../../../../core";
import './vacancies-list.scss'

export class VacanciesList extends Component{

    constructor(){
        super()
        this.jobsList=[
            {
                article:'Администратор системный в сектор информационных технологий'
            },
            {
                article:'Инженер-программист в отдел АСУП'
            },
            {
                article:'Фрезеровщик'
            },
            {
                article:'Слесарь по ремонту автомобилей'
            },
            {
                article:'Вальщик леса'
            },
            {
                article:'Машинист трелёвочной (лесо-заготавительной) машиной'
            },
        ]
    }

    render(){
        return`
        <div class="jobs">
            <ul>
                ${this.jobsList.map((job)=>(`
                    <li class='jobs-list'>
                        <span class="profile">&#xe805</span>
                        <article>${job.article}</article>
                    </li>
                `)).join(' ')}
            </ul>
        </div>    
        `
    }
}
customElements.define('vacancies-list',VacanciesList)


{/*             <li class='jobs-list'>
                    <span class="profile">&#xe805</span>
                    <article>Администратор системный в сектор информационных технологий</article>
                </li>
                <li class='jobs-list'>
                    <span class="profile">&#xe805</span>
                    <article>Инженер-программист в отдел АСУП</article>
                </li>
                <li class='jobs-list'>
                    <span class="profile">&#xe805</span>
                    <article>Фрезеровщик</article>
                </li>
                <li class='jobs-list'>
                    <span class="profile">&#xe805</span>
                    <article>Слесарь по ремонту автомобилей</article>
                </li>
                <li class='jobs-list'>
                    <span class="profile">&#xe805</span>
                    <article>Вальщик леса</article>
                </li>
                <li class='jobs-list'>
                    <span class="profile">&#xe805</span>
                    <article>Машинист трелёвочной (лесо-заготавительной) машиной</article>
                </li> */}