import { Component } from "../../../../core";
import '../../../molecules'
import '../../../atoms'
import './main-section.scss'

export class MainSection extends Component{
    render(){
        return`
        <section class="section">
            <p class="eco-house-p">
                <img src="../../../../assets/images/main/1.jpg" alt=""eco-house" class="eco-house">
            </p>
            <main-partners class="partners"></main-partners>
            <hr>
            <personal-data-work></personal-data-work>
        </section>
        `
    }
}
customElements.define('main-section',MainSection)

