import { Component } from "../../../../core";
import '../../../molecules'
import '../../../atoms'
import './main-section.scss'

export class MainSection extends Component{
    render(){
        return`
        <section class="section">
            <img src="../../../../assets/images/main/1.jpg" alt=""eco-house" class="eco-house">
            <main-partners class="partners"></main-partners>
            <hr>
            <personal-data-work></personal-data-work>
        </section>
        `
    }
}
customElements.define('main-section',MainSection)

{/* <section class="section">
            <img src="../../../../assets/images/main/1.jpg" alt=""eco-house" class="eco-house">
            <div class="partners">
                <a href=""><img src="../../../../assets/images/main/Банер-Ельск.png" alt="Банер Ельск"></a>
                <a href=""><img src="../../../../assets/images/main/byspan.png" alt="BySpan"></a>
                <a href=""><img src="../../../../assets/images/main/BFC.png" alt="BFC"></a>
            </div>
            <hr>
            <div class="politic">
                <p>
                    <a href="./pdf/main/638_02.12.2021.pdf">Политика обработки персональных данных</a>
                </p>
            </div>
        </section> */}