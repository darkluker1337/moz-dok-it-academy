import { Component } from "../../../../core";
import '../table.scss'

export class ElksFactory extends Component{
    render(){
        return`
        <table class="resp-tab">
            <tr>
                <td>Отдел по работе с персоналом</td>
                <td>+375 (2354) 42-945</td>
            </tr>
            <tr>
                <td>Главный инженер</td>
                <td>+375 (2354) 44-696</td>
            </tr>
            <tr>
                <td>Начальник коммерческого отдела</td>
                <td>+375 (2354) 44-682</td>
            </tr>
            <tr>
                <td>Коммерческий отдел</td>
                <td>+375 (2354) 44-686,<br>+375 (2354) 44-689,<br>+375 (2354) 44-690</td>
            </tr>
        </table>
        `
    }
}
customElements.define('elksfactory-table',ElksFactory)