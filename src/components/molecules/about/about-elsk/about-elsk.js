import { Component } from "../../../../core";
import '../../../atoms'


export class AboutElsk extends Component{
    constructor(){
        super()
        this.state = {
            aboutElsk:[
                {
                    paragraphs:'Создание лесопильного завода на хуторе Глинном относится к 1914 г. Местные леса из сосен и дубов позволили развивать здесь переработку древесины. Строительство завода ускорилось с началом сооружения железной дороги Калинковичи — Коростень. Лесопильный завод размещался в одном деревянном здании, в котором работало до 40 человек.'
                },
                {
                    paragraphs:'В 1924 г. на базе лесопильного завода организуется артель «Пиляр», позднее переименованная в «Красный Пильщик». В 1935 г. на предприятии начинают изготавливать мебель, и численность работающих увеличивается до 200 человек. В 1956 г. артель «Красный Пильщик» преобразуется в мебельную фабрику, и с 1960 г. предприятие начинает осваивать производство стульев. В январе 1971 г. Ельская мебельная фабрика вошла в состав ПО «Мозырьдрев».'
                },
                {
                    paragraphs:'В настоящее время фабрика является одним из филиалов Государственного предприятия «Мозыр­ский ДОК» и специализируется на изготовлении стульев, столов, табуретов.'
                }
            ]
        }
    }
    
    render(){
        return`
        <about-textHeader 
            content='ЕЛЬСКАЯ МЕБЕЛЬНАЯ ФАБРИКА'>
        </about-textHeader>
        <about-p text='${JSON.stringify(this.state.aboutElsk)}'></about-p>

        `
    }
}
customElements.define('about-elsk',AboutElsk)