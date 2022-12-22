import { Component, eventBus } from "../../../../core";
import '../../../molecules'
import '../../../atoms'
import { initialFieldsState } from "./initialState";
import './SignIn.scss'
import { FormManager } from "../../../../core/FormManager/FormManager";
import { Validator } from "../../../../core/FormManager/Validator";
import { authServiece } from "../../../../servieces/Auth";
import { appRoutes } from "../../../../constants/appRoutes";
import { appEvents } from "../../../../constants/appEvents";

export class SignIn extends Component{

  constructor(){
    super();
    this.state ={
      error:'',
      isLoading:false,
      fields: {
        ...initialFieldsState
      },
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

    signIn = (data) =>{
      this.toggleIsLoading()
      authServiece
        .signIn(data.email, data.password)
        .then((user) =>{
          authServiece.user = user;
          
          eventBus.emit(appEvents.changeRoute, {target: appRoutes.home})
          eventBus.emit(appEvents.userIsLogged)
          
        })
        .catch((error)=>{
          this.setState((state)=>{
            return{
              ...state,
              error:error.message
            };
          });
        })
          .finally(()=>{
            this.toggleIsLoading()
          })
    }

    validateForm=(evt)=>{
      if(evt.target.closest("it-input")){
        this.form.init(this.querySelector(".registration-form"), {
          email:[
            Validator.email('Email is no valid'),
            Validator.required('The field should not be empty')
          ],
          password:[Validator.required('The field should not be empty')],
        });
      }
    };

    validate = (evt) => {
      console.log(evt.detail)
      this.setState((state) => {
        return {
          ...state,
          fields: {
            ...state.fields,
            ...evt.detail,
          },
        };
      });
    };

    componentDidMount(){
      eventBus.on(appEvents.validateControls,this.validate)
      this.addEventListener('click',this.validateForm)
      this.addEventListener('submit',this.form.handleSubmit(this.signIn))
    }


    render(){

        const { fields: {email, password}, } = this.state

        return`
        <it-preloader is-loading="${this.state.isLoading}">
          <form class="form-signup registration-form">
          <div class="is-valid">${this.state.error}</div>
            <label>Вход</label>
            <it-input
              type="email"
              label="Email"
              control-name="email"
              value="${email.value}"
              is-valid="${email.isValid}"
              is-touched="${email.isTouched}"
              error-message="${email.errors.message ? email.errors.message:''}"
            ></it-input> 

            <it-input
              type="password"
              label="Password"
              control-name="password"
              value="${password.value}"
              is-valid="${password.isValid}"
              is-touched="${password.isTouched}"
              error-message="${password.errors.message ? password.errors.message:''}"
            >
            </it-input>
            <button type="submit" class="form-button">Вход</button>
          </form>
        </it-preloader>

        `
    }
}
customElements.define('sign-in',SignIn)