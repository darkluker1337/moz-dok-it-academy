import { Component } from "../../core";
import './error.scss'

export class ErrorPage extends Component{
    render(){
        return`
        <p class='error-img'>
            <img class='error-img' src="/assets/images/Error.png">
        </p>
            
        `
    }
}
customElements.define('error-page',ErrorPage)