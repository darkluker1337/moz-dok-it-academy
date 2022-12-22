import * as core from "../../../core";
import {appRoutes} from '../../../constants/appRoutes'
import './news-card.scss'

export class NewsCard extends core.Component{
    static get observedAttributes() {
        return ["title", "poster", "date", "id", "preview","insider"];
      }

    render(){
        return`
        <div class="news-card">
            <h2 class="news-card-header">${this.props.title}</h2>
            <div class="date">
                <span>${this.props.date}<span>
            </div>
            
            <div class="news-preview">
                <p>
                    ${this.props.preview}
                </p>
            </div>
            <it-link to="${appRoutes.news}/${this.props.id}">
                <span class="read-next">Читать далее</span> 
            </it-link>
        </div>
        `
    }
}
customElements.define('news-card',NewsCard)




