import { Component } from "../../../../core";
import '../table.scss'

export class Sellery extends Component{
    render(){
        return`
        <table class="resp-tab">
            <tr>
                <td>ЛОМАЧ Елена Степановна</td>
                <td>Начальник отдела продаж</td>
                <td>+375 (236) 37-54-32</td>
                <td>lomach.e@moz-dok.by</td>
            </tr>
            <tr>
                <td>ПАВЛОВА Ольга Петровна</td>
                <td>Специалист по продаже теплоизоляционных плит</td>
                <td>+375 (236) 37-54-37</td>
                <td>pavlova.o@moz-dok.by</td>
            </tr>
            <tr>
                <td>АЛИЕВА Инна Александровна</td>
                <td>Специалист по продаже пиломатериалов</td>
                <td>+375 (236) 37-54-00</td>
                <td>alieva.i@moz-dok.by</td>
            </tr>
            <tr>
                <td>ЛЕЩИНСКИЙ Николай Сергеевич</td>
                <td>Специалист по продаже теплоизоляционных плит</td>
                <td>+375 (236) 24-54-28</td>
                <td>leshchinskiy.n@moz-dok.by</td>
            </tr>
            <tr>
                <td>РИМОРЕВА Ольга Петровна</td>
                <td>Специалист по продаже пиломатериалов</td>
                <td>+375 (236) 37-54-15</td>
                <td>rimoreva.o@moz-dok.by</td>
            </tr>
        </table>
        `
    }
}
customElements.define('sellery-table',Sellery)