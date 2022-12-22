import { Component, eventBus } from "../../../../core";
import '../../../molecules'
import '../../../atoms'
import { initialFieldsState } from "./initialState";
import './SignUp.scss'
import { FormManager } from "../../../../core/FormManager/FormManager";
import { Validator } from "../../../../core/FormManager/Validator";
import { authServiece } from "../../../../servieces/Auth";
import { appRoutes } from "../../../../constants/appRoutes";
import { appEvents } from "../../../../constants/appEvents";

export class SignUp extends Component{

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

    registerUser = (data) =>{
      this.toggleIsLoading()
      authServiece
        .signUp(data.email, data.password)
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
      this.addEventListener('click',this.validateForm)
      eventBus.on(appEvents.validateControls,this.validate)
      this.addEventListener('submit',this.form.handleSubmit(this.registerUser))
    }


    render(){

        const { fields: {email, password}, } = this.state

        return`
        <it-preloader is-loading="${this.state.isLoading}">
          <form class="form-signup registration-form">
          <div class="is-valid">${this.state.error}</div>
            <label>Регистрация</label>
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
            <button type="submit" class="form-button">Регистрация</button>
          </form>
        </it-preloader>

        `
    }
}
customElements.define('sign-up',SignUp)