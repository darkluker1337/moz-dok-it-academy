import { Component } from "../../../../core";
import './FuelChipsSection.scss'

export class FuelOrganism extends Component{

    constructor(){
        super();
        this.state = {
            fslightbox:'gallery-chips',
            desciption:'Топливная щепа — измельченное древесное сырье, которое по своему качеству может быть использовано только как топливо. Щепа является эффективным видом топлива, который выделяет в несколько раз больше тепла, чем обычные древесные чурки.',
            img:'../../../assets/images/product-catalog/flue.jpg',
            link:[
                {
                    img:'../../../assets/images/sertificate/Сертификат-FSC-100_1.png'
                }
            ]
        }
        this.flueChr = 
            [
                {
                head:'Характеристика топливной щепы',
                text:`
                    <p>Основная порода — сосна (возможна примесь березы, осины, ольхи).</p>
                    <ul>
                        <li>—грануляция (длина 5-50мм, толщина не более 30мм)</li>
                        <li>—зольность не более 3%</li>
                        <li>—относительная влажность от 25% — 60%</li>
                        <li>—теплота сгорания не менее 10200 кДЖ/кг (при влажности 40%)</li>
                        <li>—радиоактивность не более 200 Бк/кг</li>
                    </ul>
                `
            },
            {
                head:'Транспортировка топливной щепы',
                text:`
                <p>Щепа транспортируется железнодорожным транспортом на условиях FSA и DAF согласно ИНКОТЕРМС 2010. Транспортируется сцепкой по 10 полувагонов с оформлением одного провозного таможенного документа.</p>
                `
            },
        ]
        
    }

    render(){
        return`
            <section class="flue-section">
                <catalog-img sri='${this.state.img}'></catalog-img>
                <div class="flue-view">
                    <div class="description">
                        <catalog-description text='${this.state.desciption}'></catalog-description>
                        ${this.flueChr.map((item)=>(`
                            <flue-chr chrhead='${item.head}' chrtext='${item.text}'></flue-chr>
                        `)).join(' ')}
                        
                    </div>
                    
                </div>
                </div>
            </section>
            <div class="sertification-description">
                <p>Вся продукция ОАО «Мозырский ДОК» является высококачественной экологически чистой, соответствует требованиям международных и европейских норм, выпускается из сертифицированной древесины, что подтверждается наличием сертификата FSC.</p>
            </div>
            <div class='sertificate-footer'>
            <p><strong>Сертификат</strong></p>
            <catalog-sertification fslightbox="${this.state.fslightbox}" items='${JSON.stringify(this.state.link)}'></catalog-sertification>
            </div>
        `
    }
}
customElements.define('fuel-organism',FuelOrganism)
