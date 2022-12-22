import { Component } from "../../../core";
import './furnitureSection.scss'

export class FurnitureSection extends Component{
    render(){
        return`
        <main class="Furniture-pictures">
            <section class="picture"><img src="../../../assets/images/Furniture/Щитовые-элементы-2237-м2-цена-за-1-м2-850-руб.jpg" height="auto"  alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/щиты-мебельные-3994м2-цена-за-1-м2-161-руб.jpg" height="auto" alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/фасад-Альфина-1-шт.-цена-за-единицу-3746-руб.jpg" width="300" height="auto" alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/4.jpg" width="300" height="auto" alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/5.jpg" width="670" height="auto" alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/Рамка.jpg" width="380" height="auto" alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/Двери-гнутые.jpg" width="" height="auto" alt=""></section>
            <section class="picture"><img src="../../../assets/images/Furniture/Гнутый-фасад-Альфина.jpg" width="480" height="auto" alt=""></section>
        </main>
        `
    }
}
customElements.define('furniture-section',FurnitureSection)