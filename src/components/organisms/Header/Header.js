import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import * as core from  "../../../core";
import { eventBus } from "../../../core";
import './Header.scss'

export class Header extends core.Component {

    constructor(){
        super()
        this.state ={
            isOpen:false,
            activePath: window.location.pathname,
        }
    }

    static get observedAttributes(){
        return ['is-logged']
    }

    onSignOut = (evt) =>{
        evt.preventDefault()
        if(evt.target.closest('.sign-out-link')){
            eventBus.emit(appEvents.userLoggedOut)
        }
    }





    onChangeRoute = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                activePath: evt.detail.target,
            };
            });
        };

        isActiveLink(path) {
            return this.state.activePath === path ? "active" : "";
        }









    showMenu(){
        this.setState((state)=>{
            return {
                ...state,
                isOpen: !state.isOpen
            }
        })
    }

    componentDidMount(){
        eventBus.on(appEvents.changeRoute, this.onChangeRoute)
        this.addEventListener('click', this.onSignOut)
        this.addEventListener("show-menu",this.showMenu)
    }

    componentWillUnmount(){
        this.removeEventListener('click', this.onSignOut)
        this.removeEventListener("show-menu",this.showMenu)
    }


    render () {
        return `
            <div class='user-regist'>
                ${JSON.parse(this.props["is-logged"])
                    ?`  
                        <it-link to='${appRoutes.admin}' ><span class='regist'>Профиль</span></it-link>
                        <span>/</span>
                        <a href='#' class='sign-out-link'>
                            <span>Выход</span>
                        </a>`
                    :`  
                        <it-link to='${appRoutes.SignUp}' ><span class='regist'>Регистрация</span></it-link>
                        <span>/</span>
                        <it-link to='${appRoutes.SignIn}' ><span class='login'>Войти</span></it-link>` 
                }
            </div>


            


            <header class="header">
                <it-link to="${appRoutes.home}">
                    <img src="/assets/images/logo/logo.png" alt="img" class="logo">
                </it-link>
                

                <menu-btn eventtype="show-menu"></menu-btn>
                
                
                <ul class="menu ${!this.state.isOpen ? "btn-change": ""}">
                    <li>
                        <it-link to="${appRoutes.home}">
                            <span class="${this.isActiveLink(appRoutes.home)} link">Главная</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.news}">
                            <span class="link ${this.isActiveLink(appRoutes.news)} ">Новости</span>
                        </it-link>
                    </li>
                    <li class='open-dop-info'>
                        <it-link to="${appRoutes.stock}">
                            <span class="link  ${this.isActiveLink(appRoutes.stock)}">Акции</span>
                        </it-link>
                        <ul class="dop-info">
                            <li><it-link to="${appRoutes.bearings}"><span class="link ${this.isActiveLink(appRoutes.bearings)}">Подшибники</span></it-link></li>
                            <li><it-link to="${appRoutes.furniture}"><span class="link ${this.isActiveLink(appRoutes.furniture)}">Мебель</span></it-link></li>
                            <li><it-link to="${appRoutes.decking}"><span class="link ${this.isActiveLink(appRoutes.decking)}">Мебельные настилы</span></it-link></li>
                        </ul>
                    </li>
                    <li class='open-dop-info'> 
                        <it-link to="${appRoutes.products}">
                            <span class="link ${this.isActiveLink(appRoutes.products)}">Продукция</span>
                        </it-link>
                        <ul class="dop-info">
                            <li><it-link to="${appRoutes.plate}"><span class="link ${this.isActiveLink(appRoutes.plate)}">Теплоизоляционная плита</span></it-link></li>
                            <li><it-link to="${appRoutes.briquettes}"><span class="link ${this.isActiveLink(appRoutes.briquettes)}">Брикеты</span></it-link></li>
                            <li><it-link to="${appRoutes.decking}"><span class="link ${this.isActiveLink(appRoutes.decking)}">Мебельные настилы</span></it-link></li>
                            <li><it-link to="${appRoutes.fuelChips}"><span class="link ${this.isActiveLink(appRoutes.fuelChips)}">Топливная щепа</span></it-link></li>
                        </ul>
                    </li>
                    <li>
                        <it-link to="${appRoutes.about}">
                            <span class="link ${this.isActiveLink(appRoutes.about)}">О нас</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.suppliers}">
                            <span class="link ${this.isActiveLink(appRoutes.suppliers)}">Поставщикам</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.vacancies}">
                            <span class="link ${this.isActiveLink(appRoutes.vacancies)}">Вакансии</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.contacts}">
                            <span class="link ${this.isActiveLink(appRoutes.contacts)}">Контакты</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.union}">
                            <span class="link ${this.isActiveLink(appRoutes.union)}">Профсоюз</span>
                        </it-link>
                    </li>
                </ul> 
                
                
            </header>
            
            <hr class='hr-full'>  
        `;
    }
}

customElements.define('it-header', Header)
