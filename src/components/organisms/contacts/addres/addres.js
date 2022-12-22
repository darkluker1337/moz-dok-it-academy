import { Component } from "../../../../core";
import './addres.scss'

export class Addres extends Component{
    
    render(){
        return`
        <section class="contacts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11664.208119236346!2d29.19991533922647!3d52.07795134415599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x601c9d17bf336b9d!2z0J7QkNCeINCc0L7Qt9GL0YDRgdC60LjQuSDQlNCe0Jo!5e0!3m2!1sru!2sby!4v1668083994308!5m2!1sru!2sby"style="border:0;"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="googlemap"></iframe>
        <div class="addres">
            <div class="contact-head">
                <div class="icon icon-map">&#xf1d8</div> 
            </div>
            <div class='contact-info'>
                <h3>ЮРИДИЧЕСКИЙ АДРЕС</h3>
                <p>Открытое акционерное общество «Мозырский ДОК»</p>
                <p>(ОАО «Мозырский ДОК»)</p>
                <p>Республика Беларусь, 247760, г. Мозырь,</p>
                <p>ул. Социалистическая, 120а</p>
                <p>т/ф +375 (236) 20-43-11</p>
                <p>info.moz-dok@moz-dok.by</p>
                <p>www.moz-dok.by</p>
            </div>
        </div>
    </section>
        `
    }
}

customElements.define('contact-addres',Addres)