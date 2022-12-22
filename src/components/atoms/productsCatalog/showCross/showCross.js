import { Component } from "../../../../core";

export class ShowCross extends Component{


    componentDidMount(){
        this.addEventListener("click",()=>{
            this.dispatch(this.props.eventtype)
        });
        }

    static get observedAttributes(){
        return ['eventtype','content']
    }


    render(){
        const {content} = this.props
        return`
        <span class="cross">
            ${content}
        </span>
        `
    }
}
customElements.define('show-cross',ShowCross)