import { Component } from "../../../core";
import '../../atoms'
import './positions-name.scss'


export class PositionName extends Component{
    constructor(){
        super()
        this.main = {
            MainName:'Полуян Галина Матвеевна',
            MainPosition:'Председатель профкома',
            class:'odd'
        };
        this.unionNames = [
            {
                name:'Горносталь Екатерина Леонидовна',
                position:'Казначей',
                class:'even'
            },
            {
                name:'Квашин Алексей Анатольевич',
                position:'Член профкома',
                class:'odd'
            },
            {
                name:'Лисак Любовь Валентиновна',
                position:'Член профкома',
                class:'even'
            },
            {
                name:'Липская Юлия Михайловна',
                position:'Член профкома',
                class:'odd'
            },
            {
                name:'Павлова Ольга Петровна',
                position:'Член профкома',
                class:'even'
            },
            {
                name:'Позняк Марина Владимировна',
                position:'Член профкома',
                class:'odd'
            },
        ]
    }
    
    render(){
        console.log(this.props)
        return`
        <div class="positions-held">
        <p>Состав профсоюзного комитета ОАО «Мозырский ДОК»</p>
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
customElements.define('position-name',PositionName)


