import { Component } from "../../../core";
import './suppliers-table.scss'

export class SuppliersTable extends Component{
    render(){
        return`
        <table class="resp-tab">
            <thead>
                <tr class="odd">
                    <th>№</th>
                    <th>Наименование материала</th>
                    <th>КОД</th>
                    <th>Единица измерения</th>
                    <th>Годовая потребность</th>
                </tr>
            </thead>
            <tbody>
                <tr class="even">
                    <td>1</td>
                    <td>Полиуретановое связующее средство TETRAPUR D512</td>
                    <td>3909509008</td>
                    <td>кг.</td>
                    <td>594 000</td>
                </tr>
                <tr class="odd">
                    <td>2</td>
                    <td>Разделительное средство Y-12400-15/1</td>
                    <td>3910000008</td>
                    <td>кг.</td>
                    <td>20 000</td>
                </tr>
                <tr class="even">
                    <td>3</td>
                    <td>Пленка П/Э стретч-худ 0,08*(2200*2+475*4)</td>
                    <td>3920102400</td>
                    <td>кг.</td>
                    <td>10 000</td>
                </tr>
                <tr class="odd">
                    <td>4</td>
                    <td>Пропиленкарбонат</td>
                    <td>2920901000</td>
                    <td>кг.</td>
                    <td>1000</td>
                </tr>
                <tr class="even">
                    <td>5</td>
                    <td>Ленточная пила 180*1,47 Т35</td>
                    <td>8202200000</td>
                    <td>шт.</td>
                    <td>36</td>
                </tr>
                <tr class="odd">
                    <td>6</td>
                    <td>Двухфазная форсунка<br>
                        Водо-воздушная пара<br>
                        Прокладка<br>
                        Уплотнительное кольцо</td>
                    <td>8424900000<br>
                        8424900000<br>                   
                        3926909709<br>
                        4016930005</td>
                    <td>шт.</td>
                    <td>6<br>
                        6<br>
                        350<br>
                        400</td>
                </tr>
                <tr class="even">
                    <td>7</td>
                    <td>Спиральная лента для ContiTherm 40,50*2,85м<br>
                        Спиральная лента для ContiTherm 45,45*2,85м<br>
                        Спиральная лента для нанесения клеевого состава 21,45*2,40м</td>
                    <td>5911909000<br>
                        5911909000<br>
                        5911909000</td>
                    <td>шт.</td>
                    <td>1<br>
                        1<br>
                        2
                    </td>
                </tr>
            </tbody>
        </table>
        `
    }
}
customElements.define('suppliers-table',SuppliersTable)
