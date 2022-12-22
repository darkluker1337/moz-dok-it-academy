import {Component} from '../../../core'
import './MenuShowBtn.scss'

export class MenuShowBtn extends Component{


    componentDidMount(){
        this.addEventListener("click",()=>{
            this.dispatch(this.props.eventtype)
        });
        } 

    static get observedAttributes(){
        return ['eventtype'];
    }



    render(){
        return`
        <div>
            <div class="show-menu"></div>
            <div class="show-menu"></div>
            <div class="show-menu"></div>
        </div>
            `
    }
}
customElements.define('menu-btn',MenuShowBtn)