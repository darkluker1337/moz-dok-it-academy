import { Component } from '../../../../core';
import { FormManager } from '../../../../core/FormManager/FormManager';
import { databaseService } from '../../../../servieces/Database';
import { storageService } from '../../../../servieces/Storage';
import './Admin.scss'

export class BearingsFormSender extends Component{

    constructor(){
        super();
        this.state = {
            isLoading:false,
        };
        this.form = new FormManager()
    }

    toggleIsLoading=()=>{
        this.setState((state)=>{
          return{
            ...state,
            isLoading: !state.isLoading
          };
        });
    };

    createBearings = (data) =>{
        this.toggleIsLoading()
        storageService.upLoadPoster(data.poster)
            .then((snapshot)=>{
                storageService.getDownloadURL(snapshot.ref).then((url)=>{
                    databaseService.create('bearings',{
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
        this.form.init(this.querySelector('.send-data'), {})
        this.addEventListener('submit', this.form.handleSubmit(this.createBearings))

    }

    componentWillUnmount(){
        this.form.init(this.querySelector('.send-data'), {})
        this.removeEventListener('submit', this.form.handleSubmit(this.createBearings))
    }

    render(){
        return`
        <it-preloader is-loading="${this.state.isLoading}">
            <div class="">
                <form class="send-data form-data">
                    <h4 class="label-data-admin">Данные подшипников</h4>
                    <div class="bearing-data">

                        <div class="input-bearing-data">
                        <label class="">Название подшипника</label>
                        <input class="" type="text" name="title">
                        </div>

                        <div class="input-bearing-data">
                        <label class="">Загрузить картинку</label>
                        <input class="" type="file" id="formFile" name="poster">
                        </div>

                        <div class="input-bearing-data">
                        <label class="">Цена</label>
                        <input class="" type="text" name="cost">
                        </div>

                        <div class="input-bearing-data">
                        <label class="">Количество</label>
                        <input class="" type="text" name="quanity">
                        </div>

                        <button type="submit" class="form-button-admin">Отправка данных</button>
                    </div>
                </form>
            </div>
        </it-preloader>
        `
    }
}
customElements.define('bearings-form-sender',BearingsFormSender)