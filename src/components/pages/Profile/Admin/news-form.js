import { Component } from '../../../../core';
import { FormManager } from '../../../../core/FormManager/FormManager';
import { databaseService } from '../../../../servieces/Database';
import { storageService } from '../../../../servieces/Storage';
import './Admin.scss'

export class NewsFormSender extends Component{

    constructor(){
        super();
        this.state = {
            isLoading:false,
        };
        this.formNews = new FormManager()
    }

    toggleIsLoading=()=>{
        this.setState((state)=>{
          return{
            ...state,
            isLoading: !state.isLoading
          };
        });
    };

    createNews= (data) =>{
        this.toggleIsLoading()
        storageService.upLoadNewsPoster(data.poster)
            .then((snapshot)=>{
                storageService.getDownloadURL(snapshot.ref).then((url)=>{
                    databaseService.create('news',{
                        ...data,
                        poster: url,
                    })
                })
            })
            .finally(()=>{
                this.toggleIsLoading()
            })
    }




    componentDidMount(){
        this.formNews.init(this.querySelector('.send-news'), {})
        this.addEventListener('submit', this.formNews.handleSubmit(this.createNews))


    }

    componentWillUnmount(){
        this.formNews.init(this.querySelector('.send-news'), {})
        this.removeEventListener('submit', this.formNews.handleSubmit(this.createBearings))
    }

    render(){
        const date = new Date()
        return`
        <it-preloader is-loading="${this.state.isLoading}">
        <div class="">
        <form class="send-data form-data">
            <h4 class="label-data-admin">Данные Новости</h4>
            <div class="bearing-data">

                <div class="input-bearing-data">
                <label class="">Заголовок Новости</label>
                <input class="" type="text" name="title">
                </div>

                <div class="input-bearing-data">
                <label class="">Загрузить картинку</label>
                <input class="" type="file" id="formFile" name="poster" required multiple>
                </div>

                <div class="input-bearing-data">
                <label class="">Содержимое</label>
                <textarea class="" type="text" name="insider"></textarea>
                </div>

                <div class="input-bearing-data">
                <label class="">Краткое Содержимое</label>
                <textarea class="" type="text" name="preview"></textarea>
                </div>

                <div class="input-bearing-data">
                <label class="">Дата добавления</label>
                <input class="" type="text" name="date">
                </div>

                <button type="submit" class="form-button-admin">Отправка данных</button>
            </div>
        </form>
    </div>
        </it-preloader>
        `
    }
}
customElements.define('news-form-sender',NewsFormSender)