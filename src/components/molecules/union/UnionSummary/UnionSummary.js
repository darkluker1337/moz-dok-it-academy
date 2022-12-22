import { Component } from "../../../../core";
import './UnionSummary.scss'

export class UnionSummary extends Component{

    render(){
        return`
            <div class="union-summary">
                <p>Первичная  профсоюзная организация Открытого акционерного общества «Мозырский ДОК» Белорусского профессионального союза работников леса и природопользования</p>
            </div>
            <hr>
        `
    }
}

customElements.define('union-summary',UnionSummary)



// <div class="union-сhairman">
//     <img src="/img/union/union.jpg" alt="Председатель профсоюзного комитета" class="union-photo">
//     <section class="union-chairman-summary">
//         <p><strong>Председатель профсоюзного комитета</strong></p>
//         <p>ПОЛУЯН Галина Матвеевна</p>
//         <p>Тел: +375 232 20-40-64</p>
//         <p>E-mail: polujan.g@moz-dok.by</p>
//     </section>
// </div>