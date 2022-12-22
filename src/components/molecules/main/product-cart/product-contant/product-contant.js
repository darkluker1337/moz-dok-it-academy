import { Component } from "../../../../../core";
import '../../../../atoms'
import './product-contant.scss'
export class ProductContant extends Component{
    constructor(){
        super();
        this.state ={
            icon:'&#xe802'
        }
        this.carts = [
            {
                h3:'ТЕПЛОИЗОЛЯЦ. ПЛИТЫ',
                p:'НАТУРАЛЬНАЯ ТЕПЛОИЗОЛЯЦИЯ ИЗ ДРЕВЕСНОГО ВОЛОКНА БЕЛТЕРМО',
            },
            {
                h3:'МЕБЕЛЬНЫЕ НАСТИЛЫ',
                p:'МЕБЕЛЬНЫЕ НАСТИЛЫ, ИЗГОТОВЛЕННЫЕ ИЗ ДРЕВЕСИНЫ ХВОЙНЫХ ПОРОД',
            },
            {
                h3:'БРИКЕТЫ',
                p:'ДРЕВЕСНЫЕ ТОПЛИВНЫЕ БРИКЕТЫ ТИПА RUF',
            },
            {
                h3:'ПИЛОМАТЕРИАЛЫ',
                p:'ПИЛОМАТЕРИАЛЫ ОБРЕЗНЫЕ ХВОЙНЫХ ПОРОД ЕСТЕСТВЕННОЙ ВЛАЖНОСТИ И СУХИЕ 2,3,4 СОРТА',
            },
        ];

    }
    render(){
        return`
        
        <ul class="productin-cart">
            ${this.carts.map((cart)=>{
                return`
                    <li>
                        <div class="contant">
                            <cart-head class='head' icon='${JSON.stringify(this.state.icon)}'></cart-head>
                            <h3>${cart.h3}</h3>
                            <p>${cart.p}</p>
                        </div>
                    </li>
                `
            }).join(' ')}
        </ul> 
        
        `
    }
}

customElements.define('product-contant',ProductContant)