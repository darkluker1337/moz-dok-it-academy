import { Component } from "../../../core";
import '../../atoms'
import './positions-name.scss'


export class RevisorComision extends Component{
    constructor(){
        super()
        this.main = {
            MainName:'Корнач Татьяна Федоровна',
            MainPosition:'Председатель ревизионной комиссии',
            class:'odd'
        };
        this.unionNames = [
            {
                name:'Чирич Людмила Петровна',
                position:'Член ревизионной комиссии',
                class:'even'
            },
            {
                name:'Артюшенко Анастасия Константиновна',
                position:'Член ревизионной комиссии',
                class:'odd'
            },
        ]
    }
    
    render(){
        console.log(this.props)
        return`
        <div class="positions-held">
        <p>Ревизионная комиссия</p>
        <div class="positions-name">
            <ul class="first-colomn">
                <union-li classname='top-row ${this.main.class} text-center' content="${this.main.MainName}"></union-li>
                ${this.unionNames.map((union)=>(`
                    <union-li classname='bot-row ${union.class} text-center' content="${union.name}"></union-li>
                `)).join('')}
            </ul>
            <ul class="second-colomn">
                <union-li classname='top-row ${this.main.class} text-center' content="${this.main.MainPosition}"></union-li>
                ${this.unionNames.map((union)=>(`
                    <union-li classname='bot-row ${union.class} text-center' content="${union.position}"></union-li>
                `)).join('')}
            </ul>
        </div>
    </div>
        `
    }
}
customElements.define('revisor-comision',RevisorComision)
