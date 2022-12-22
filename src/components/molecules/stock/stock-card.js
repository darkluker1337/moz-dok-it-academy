import * as core from  "../../../core";
import { appRoutes } from '../../../constants/appRoutes'
import './stock-card.scss'
export class StockCard extends core.Component{

    

    constructor(){
        super();
        this.cards = [
            {
                h3:'ПОДШИПНИКИ',
                link:appRoutes.bearings,
                icon:'&#xe803',
            },
            {
                h3:'МЕБЕЛЬ',
                link:appRoutes.furniture,
                icon:'&#xf1bb',
            },
            {
                h3:'МЕБЕЛЬНЫЕ НАСТИЛЫ',
                link:appRoutes.decking,
                icon:'&#xe802'
            },
            {
                h3:'АКЦИОНЕРАМ',
                doc:[
                    {
                        href:'../../assets/images/stock/Информация-о-сделке-с-заинтересованным-аффилированным-лицом-11-Октябрь-2021.pdf',
                        text:'Информация о сделке с заинтересованным аффилированным лицом (11 Октябрь 2021)'
                    },
                    {
                        href:'../../assets/images/stock/Информация-о-сделке-с-заинтересованным-аффилированным-лицом-28-Сентябрь-2021.pdf',
                        text:'Информация о сделке с заинтересованным аффилированным лицом (28 Сентябрь 2021)'
                    },
                    {
                        href:'../../assets/images/stock/Информация-о-крупной-сделке-09-Июль-2021.pd',
                        text:'Информация о крупной сделке (09 Июль 2021)'
                    },
                    {
                        href:'../../assets/images/stock/раскр.инф-о-аффелированных.pdf',
                        text:'Информация о сделке с аффилир. лицом (09 Июль 2021)'
                    },
                    {
                        href:'../../assets/images/stock/Документ-содержит-годовой-отчет-за-2020г..xls',
                        text:'Годовой отчет за 2020г'
                    },
                    {
                        href:'../../assets/images/stock/раскр.инф.-о-крупной-сделке.pdf',
                        text:'Информация о существенных фактах (событиях, действиях) за 2020 год'
                    },
                    {
                        href:'../../assets/images/stock/Аудиторское-заключение-за-2019г..pdf',
                        text:'Аудиторское заключение за 2019г.'
                    },
                ],
                icon:'&#xe801'
            },
        ];

    }


    render(){
        return`
        <ul class="stock-card">
            ${this.cards.map((card)=>{
                return`
                    <li class="stock-contant">
                            
                            <div class='stock-head'>
                                <span class="icon black-head">${card.icon}</span>
                            </div>
                            <it-link to="${card.link}">
                            <h3>${card.h3}</h3>
                            </it-link>
                            ${card.doc ?`${card.doc.map((items)=>(`
                                <p><a href=${items.href}>${items.text}</a><p>
                                <br>
                            `
                            )).join(' ')}`:''}
                    </li>
                `
            }).join(' ')}
        </ul> 
        `
    }
}
customElements.define('stock-card',StockCard)