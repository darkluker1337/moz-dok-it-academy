import { Component } from "../../../../core";
import './UnionChairman.scss'

export class UnionChairman extends Component{

    

    render(){
        return`
            <div class="union-сhairman">
                <img src="../../../assets/images/union/union.jpg" alt="Председатель профсоюзного комитета" class="union-photo">
                <section class="union-chairman-summary">
                    <p><strong>Председатель профсоюзного комитета</strong></p>
                    <p>ПОЛУЯН Галина Матвеевна</p>
                    <p>Тел: +375 232 20-40-64</p>
                    <p>E-mail: polujan.g@moz-dok.by</p>
                </section>
            </div>
            <hr>
        `
    }
}

customElements.define('union-chairman',UnionChairman)