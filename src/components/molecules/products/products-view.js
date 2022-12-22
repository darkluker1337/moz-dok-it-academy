import { Component } from "../../../core";
import './products-view.scss'
import { appRoutes } from '../../../constants/appRoutes'

export class ProductsView extends Component{
    constructor(){
        super();
        this.productsView = [
            {
                img:"../../assets/images/product-view/1.jpg",
                h3:'Теплоизоляционная плита',
                link:appRoutes.plate,
            },
            {
                img:"../../assets/images/product-view/2.jpg",
                h3:'Брикеты',
                link:appRoutes.briquettes,
            },
            {
                img:"../../assets/images/product-view/3.jpg",
                h3:'Мебельные настилы',
                link:appRoutes.decking,
            },
            {
                img:"../../assets/images/product-view/4.jpg",
                h3:'Топливная щепа',
                link:appRoutes.fuelChips,
            },
        ]
    }
    render(){
        return`
        <section class="products-view-section">
            <ul class="product-view-list">
                ${this.productsView.map((item)=>(`
                    <li class="product-view-item">
                        <div class="product-img">
                            <img src=${item.img} alt="">
                        </div>
                        <div class="product-view-description">
                            <h3 class='product-view-header'>${item.h3}</h3>
                            <hr class="product-view-hr">
                            <it-link to="${item.link}" >
                                <div class="product-view-link">
                                    <span class="share">&#xe804</span>
                                    <span class="text-inside">Подробнее...</span>
                                </div>
                            </it-link>
                        </div>
                    </li> 
                `)).join(' ')}
            </ul>
        </section>
        `
    }
}
customElements.define('products-view',ProductsView)
