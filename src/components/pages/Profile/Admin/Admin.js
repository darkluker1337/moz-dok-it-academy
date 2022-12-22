import { Component, eventBus } from '../../../../core';
import './bearings-form'
import './news-form'
import './Admin.scss'
import { authServiece } from '../../../../servieces/Auth';
import { appRoutes } from '../../../../constants/appRoutes';
import { appEvents } from '../../../../constants/appEvents';
export class AdminPage extends Component{

    componentDidMount(){
        if (!authServiece.user) {
            eventBus.emit(appEvents.changeRoute, {
                target: appRoutes.SignUp,
            });
        }
    }

    render(){
        return`
        <h1>Админка</h1>
        <bearings-form-sender></bearings-form-sender>
        <news-form-sender></news-form-sender>
        `
    }
}
customElements.define('admin-page',AdminPage)


















// import { appRoutes } from '../../../../constants/appRoutes';
// import { Component } from '../../../../core';
// import { FormManager } from '../../../../core/FormManager/FormManager';
// import { authServiece } from '../../../../servieces/Auth';
// import { databaseService } from '../../../../servieces/Database';
// import { storageService } from '../../../../servieces/Storage';
// import './Admin.scss'

// export class AdminPage extends Component{

//     constructor(){
//         super();
//         this.state = {
//             isLoading:false,
//         };
//         this.form = new FormManager()
//         this.formNews = new FormManager()
//     }

//     toggleIsLoading=()=>{
//         this.setState((state)=>{
//           return{
//             ...state,
//             isLoading: !state.isLoading
//           };
//         });
//     };

//     createBearings = (data) =>{
//         this.toggleIsLoading()
//         storageService.upLoadPoster(data.poster)
//             .then((snapshot)=>{
//                 storageService.getDownloadURL(snapshot.ref).then((url)=>{
//                     databaseService.create('bearings',{
//                         ...data,
//                         poster: url,
//                     })
//                 })
//             })
//             .finally(()=>{
//                 this.toggleIsLoading()
//               })
//     }

//     createNews= (data) =>{
//         this.toggleIsLoading()
//         storageService.upLoadNewsPoster(data.poster)
//             .then((snapshot)=>{
//                 storageService.getDownloadURL(snapshot.ref).then((url)=>{
//                     databaseService.create('news',{
//                         ...data,
//                         poster: url,
//                     })
//                 })
//             })
//             .finally(()=>{
//                 this.toggleIsLoading()
//             })
//     }



//     componentDidMount(){
//         this.form.init(this.querySelector('.send-data'), {})
//         this.addEventListener('submit', this.form.handleSubmit(this.createBearings))



//         this.formNews.init(this.querySelector('.send-news'), {})
//         this.addEventListener('submit', this.formNews.handleSubmit(this.createNews))



//         if (!authServiece.user) {
//             this.dispatch('change-route', {
//                 target: appRoutes.SignUp,
//             });
//         }
//     }

//     componentWillUnmount(){
//         this.form.init(this.querySelector('.send-data'), {})
//         this.removeEventListener('submit', this.form.handleSubmit(this.createBearings))

        

//         this.formNews.init(this.querySelector('.send-news'), {})
//         this.removeEventListener('submit', this.formNews.handleSubmit(this.createNews))
//     }

//     render(){
//         const date = new Date()
//         return`
//         <it-preloader is-loading="${this.state.isLoading}">
//             <div class="">
//             <h1>Админка</h1>

//                 <form class="send-data form-data">
//                     <h4 class="label-data-admin">Данные подшипников</h4>
//                     <div class="bearing-data">

//                         <div class="input-bearing-data">
//                         <label class="">Название подшипника</label>
//                         <input class="" type="text" name="title">
//                         </div>

//                         <div class="input-bearing-data">
//                         <label class="">Загрузить картинку</label>
//                         <input class="" type="file" id="formFile" name="poster">
//                         </div>

//                         <div class="input-bearing-data">
//                         <label class="">Цена</label>
//                         <input class="" type="text" name="cost">
//                         </div>

//                         <div class="input-bearing-data">
//                         <label class="">Количество</label>
//                         <input class="" type="text" name="quanity">
//                         </div>

//                         <button type="submit" class="form-button-admin">Отправка данных</button>
//                     </div>
//                 </form>
//             </div>

//             <form class="send-news form-data">
//                     <h4 class="label-data-admin">Новость</h4>
//                     <div class="news-data">

//                         <div class="input-bearing-data">
//                         <label class="">Название новсти</label>
//                         <input class="" type="text" name="title">
//                         </div>

//                         <div class="input-bearing-data">
//                         <label class="">Загрузить картинку</label>
//                         <input class="" type="file" id="formFile" name="newsposter" multiple>
//                         </div>

//                         <div class="input-bearing-data">
//                         <label class="">Содержимое новости</label>
//                         <textarea name="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                         </div>

//                         <div class="input-bearing-data">
//                         <label class="">предпоказ новости</label>
//                         <textarea name="preView" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                         </div>

//                         <div class="input-bearing-data">
//                         <input type="date" name="news-date"
//                         value="${date.getFullYear()}-${date.getMonth()}-${date.getDay}"
//                         min="2018-01-01" max="2030-12-31">
//                         </div> 

//                         <button type="submit" class="form-button-admin">Создать новость</button>
//                     </div>
//                 </form>
            

//         </it-preloader>
//         `
//     }
// }
// customElements.define('admin-page',AdminPage)
