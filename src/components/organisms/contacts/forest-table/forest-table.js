import { Component } from "../../../../core";
import '../table.scss'

export class ForestTable extends Component{
    render(){
        return`
        <table class="resp-tab">
        <tr>
            <td>Отдел по работе с персоналом</td>
            <td>+375 (2354) 2-12-61</td>
        </tr>
        </table>
        `
    }
}
customElements.define('forest-table',ForestTable)