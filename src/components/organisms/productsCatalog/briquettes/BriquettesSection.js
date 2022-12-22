import { Component } from "../../../../core";

import './BriquettesSection.scss'

export class BriquettesOrganism extends Component{

    constructor(){
        super();
        this.state = {
            fslightbox:'gallery-briq',
            desciption:'Брикеты выпускаются из сухих опилок древесины хвойных пород. Древесные брикеты не включают в себя никаких вредных веществ, в т.ч. клеев. Специально прессованные под большим давлением и при высокой температуре, брикеты имеют прямоугольную форму кирпича (RUF-брикеты). Топливные брикеты применяются в качестве твёрдого топлива для каминов и печей любых видов, в том числе твердотопливных котлов систем отопления. Так как топливные брикеты экологически чистый продукт и горят практически бездымно, идеально использовать их для обогрева жилых помещений, бань, палаток, теплиц, овощных ям и т. д.',
            img:'../../../assets/images/product-catalog/briquesttes.jpg',
            link:[
                {
                    
                    img:'../../../assets/images/sertificate/sert1.jpg',
                },
                {
                    img:'../../../assets/images/sertificate/serteng.jpg',
                },
                {
                    img:'../../../assets/images/sertificate/Сертификат-FSC-100_1.png',
                },
            ]
        }
        this.flueChr = 
            [
                {
                head:'Характеристика топливных брикетов',
                text:`
                    <p>Основная порода — сосна (возможна примесь березы, осины, ольхи).</p>
                    <ul class="characteristics-list">
                        <li>—Влажность — около 8%</li>
                        <li>—Теплота сгорания — 4200-4500 ккал/кг.</li>
                        <li>—Зольность — 0,7%.</li>
                        <li>—Вес упаковки — 10 кг.</li>
                        <li>—Вес брикета на поддоне (96 уп.) – 960 кг.</li>
                        <li>—Теплотворная способность — min 16,9 МДж/кг.</li>
                    </ul>
                `
            },
            {
                head:'Упаковка брикетов',
                text:`
                <p>Упакованы брикеты в полиэтиленовую упаковку по 10 кг. в каждой. Уложенные на поддон упаковки обтянуты пленкой и утянуты полипропиленовой лентой, которая скреплена металлическими скобами. Также возможна поставка в биг-бегах.</p>                `
            },
            {
                head:'Транспортировка брикетов',
                text:`
                <p>Товар поставляется автомобильным транспортом на разовых поддонах и железнодорожным транспортом (крытый вагон) на условиях FSA согласно ИНКОТЕРМС 2010</p>
                `
            }
        ]
        
    }

    render(){
        return`
        
            <section class="flue-section">
                <catalog-img sri='${this.state.img}' class='half-img-briq'></catalog-img>
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
                <catalog-sertification fslightbox='${this.state.fslightbox}' items='${JSON.stringify(this.state.link)}'></catalog-sertification>
            </div>
            `
    }

}
customElements.define('briquettes-organism',BriquettesOrganism)
