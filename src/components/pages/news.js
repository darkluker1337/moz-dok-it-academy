import { Component } from "../../core";
import { databaseService } from "../../servieces/Database";
import './news.scss'

export class News extends Component{

    constructor(){
        super()
        this.state = {
            isLoading:false,
            news:[],
        }
    }
    
    toggleIsLoading() {
        this.setState((state) => {
            return {
            ...state,
            isLoading: !state.isLoading,
        };
        });
    }
    
    getNews(){
        this.toggleIsLoading();
        databaseService.read('news')
            .then((data)=>{
                this.setState((state)=>{
                    return{
                        ...state,
                        news: data
                    }
                })
            })
            .finally(()=>{
                this.toggleIsLoading()
            })
    }

    componentDidMount(){
        this.getNews()
    }
    render(){
        return`
        <it-preloader is-loading="${this.state.isLoading}">
            <div class="news-page">
            ${this.state.news.map(({title,poster,date,id,preview,insider})=>{
                return`
                    <news-card
                        id="${id}"
                        title="${title}"
                        poster="${poster}"
                        date="${date}"
                        preview="${preview}"
                        insider="${insider}"
                    >
                    </news-card>
                `
            }).join(' ')}
            </div>
        </it-preloader>
            `
    }
}
customElements.define('news-page',News)