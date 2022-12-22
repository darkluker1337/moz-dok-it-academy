import { Component } from "../../../../core";
import './plate-img.scss'

export class PlateImg extends Component{
    render(){
        return`
        <p class="houser-preview">
            <img src="../../../assets/images/plate/house_car.jpg" alt="" >
        <p>
        `
    }
}
customElements.define('plate-img',PlateImg)