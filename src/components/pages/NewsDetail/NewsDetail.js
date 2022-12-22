import {Component} from '../../../core'
import { databaseService } from '../../../servieces/Database';
import './NewsDetail.scss'

export class NewsDeatil extends Component{

    constructor(){
        super()
        this.state = {
            isLoading:false,
            news:null,
        }
    }


    static get observedAttributes() {
        return ["id"];
      }

    toggleIsLoading() {
        this.setState((state) => {
            return {
            ...state,
            isLoading: !state.isLoading,
        };
        });
    }

    getNewsOne(){
        this.toggleIsLoading();
        databaseService.getDocument('news', this.props.id)
            .then((data)=>{
                this.setState((state)=>{
                    return{
                        ...state,
                        news:data
                    }
                })
            })
            .finally(()=>{
                this.toggleIsLoading()
            })
    }

    componentDidMount(){
        this.getNewsOne()
    }

    render(){
        return`
        
            ${
                !this.state.news
                ?`<it-preloader is-loading="${this.state.isLoading}"></it-preloader>`
                :`
                <div class="news-card">
                <h2 class="news-card-header">${this.state.news.title}</h2>
                <div class="date">
                    <span>${this.state.news.date}<span>
                </div>
                
                <div class="news-preview">
                    <p>
                        ${this.state.news.insider}
                    </p>
                </div>
                <div class="img-news">
                <img  src="${this.state.news.poster}">
                </div>
            </div>
            `
    }
    `
    }
}
customElements.define("news-details-page",NewsDeatil);