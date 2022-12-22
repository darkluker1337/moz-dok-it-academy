import { Component } from "../../../../core";
import './flex-plate.scss'

export class FlexPlate extends Component{

    constructor(){
        super()
        this.plates = [
            {
                img:'../../../assets/images/plate/universal-845x684.jpg',
                text:'БЕЛТЕРМО-universal',
            },
            {
                img:'../../../assets/images/plate/flex-845x611.jpg',
                text:'БЕЛТЕРМО-flex',
            },
            {
                img:'../../../assets/images/plate/ultramax-845x684.jpg',
                text:'БЕЛТЕРМО-ultra',
            },
            {
                img:'../../../assets/images/plate/instalmax-845x684.jpg',
                text:'БЕЛТЕРМО-instal',
            },
            {
                img:'../../../assets/images/plate/room-845x601.jpg',
                text:'БЕЛТЕРМО-room',
            },
            {
                img:'../../../assets/images/plate/kombi3-845x684.jpg',
                text:'БЕЛТЕРМО-kombi',
            },
            {
                img:'../../../assets/images/plate/safemax-845x684.jpg',
                text:'БЕЛТЕРМО-safe',
            },
            {
                img:'../../../assets/images/plate/floormax-1-845x684.jpg',
                text:'БЕЛТЕРМО-floor',
            },
            {
                img:'../../../assets/images/plate/topmax-845x684.jpg',
                text:'БЕЛТЕРМО-top',
            },
            {
                img:'../../../assets/images/plate/multimax-845x684.jpg',
                text:'БЕЛТЕРМО-multi',
            },
        ]
    }

    render(){
        return`
        <div class="flex-item-insulation">
            ${this.plates.map((plate)=>(`
            <div class="item-insultaion">
                <a href="" class="item-link">
                    <img src="${plate.img}" alt="">
                    <p class="item-insulation-name">
                        ${plate.text}
                    </p>
                </a>
            </div>
            `)).join(' ')}
        </div>
        `
    }
}
customElements.define('flex-plate',FlexPlate)