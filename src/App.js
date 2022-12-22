import * as core from "./core";
import {appRoutes} from './constants/appRoutes'
import './auth/PrivateRoute'
import {appEvents} from './constants/appEvents'
import './components'
import { authServiece } from "./servieces/Auth";
import { eventBus } from "./core";



export class App extends core.Component {
  constructor(){
    super()
    this.state = {
      isLoading: false,
      isLogged: false,
      error: "",
    };
  }

  toggleIsLoading(){
    this.setState((state)=>{
      return{
        ...state,
        isLoading: !state.isLoading
      }
    })
  }

  getUser(){
    this.toggleIsLoading()
    authServiece
      .init()
      .then((user)=>{
        authServiece.user = user
        this.setState((state)=>{
          
          return{
            ...state,
            isLogged: Boolean(user),
          };
        });
      })
      .catch((error)=>{
        this.setState((state)=>{
          return{
            ...state,
            error: error.message
          }
        })
      }).finally(()=>{
        this.toggleIsLoading()
      })
  }

  onSignOut = () =>{
    this.toggleIsLoading()
    authServiece
    .signOut()
    .then(()=>{
      this.setState((state)=>{
        return{
          ...state,
          isLogged:false,
        }
      })
    })
    .catch((error)=>{
      this.setState((state)=>{
        return{
          ...state,
          error: error.message
        }
      })
    })
    .finally(()=>{
      this.toggleIsLoading()
    })
  }

  setIsLogged = ()=>{
    this.setState((state)=>{
      return{
        ...state,
        isLogged:true
      }
    })
  }

  componentDidMount(){
    this.getUser()
    eventBus.on(appEvents.userIsLogged,this.setIsLogged)
    eventBus.on(appEvents.userLoggedOut,this.onSignOut)
}
  componentWillUnmount(){
    eventBus.off(appEvents.userIsLogged,this.setIsLogged)
    eventBus.off(appEvents.userLoggedOut,this.onSignOut)
  }
  render(){
    return this.state.isLoading
    ? `<it-preloader is-loading="${this.state.isLoading}"></it-preloader>`
    :` 
    <div>
      <it-router>
         
            <it-header is-logged ="${this.state.isLogged}"></it-header>
              <it-route path="${appRoutes.home}" component="home-page" title="Главная"></it-route>
              <it-route path="${appRoutes.about}" component="about-page" title="О нас"></it-route>
              
              
              <it-route path="${appRoutes.news}" component="news-page" title="Новости"></it-route>
              <it-route path="${appRoutes.news}/:id" component="news-details-page" title="Читать Новость"></it-route>

              
              <it-route path="${appRoutes.stock}" component="stock-page" title="Акции"></it-route>
              <it-route path="${appRoutes.products}" component="products-page" title="Продукция"></it-route>
              <it-route path="${appRoutes.suppliers}" component="suppliers-page" title="Поставщикам"></it-route>
              <it-route path="${appRoutes.vacancies}" component="vacancies-page" title="Вакансии"></it-route>
              <it-route path="${appRoutes.contacts}" component="contacts-page" title="Контакты"></it-route>
              <it-route path="${appRoutes.union}" component="union-page" title="Профсоюз"></it-route>
              
              <it-route path="${appRoutes.bearings}" component="bearing-page" title="Подшибники"></it-route> 
              <it-route path="${appRoutes.furniture}" component="furniture-page" title="Мебель"></it-route>
              <it-route path="${appRoutes.decking}" component="decking-page" title="Настилы"></it-route>
              
              
              <it-route path="${appRoutes.plate}" component="plate-page" title="Теплоизоляционная плита"></it-route> 
              <it-route path="${appRoutes.briquettes}" component="briquettes-page" title="Брикеты"></it-route>
              <it-route path="${appRoutes.fuelChips}" component="fuel-page" title="Топливная щепа"></it-route>
          

              <it-route path="${appRoutes.SignUp}" component="sign-up" title="Регистация"></it-route>
              <it-route path="${appRoutes.SignIn}" component="sign-in" title="Профиль"></it-route>           
              
              <private-route path="${appRoutes.admin}" component="admin-page" title="Админ"></private-route>


              <it-route path="${appRoutes.error}" component="error-page" title="Нет страницы"></it-route>  
              
              <it-outlet></it-outlet>
      </it-router>
    </div>



    `
  }

}



customElements.define("my-app", App);
