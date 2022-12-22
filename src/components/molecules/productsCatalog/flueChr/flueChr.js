import { Component } from "../../../../core";
import './fluechr.scss'

export class FlueChr extends Component{

    constructor(){
        super()
        this.state = {
            isVisible:true,
        }
    }

    onClick(){
        this.setState((state)=>{
            return{
                ...state,
                isVisible: !state.isVisible
            }
        })
    }

    componentDidMount(){
        this.addEventListener('show-chr',this.onClick)
    }
    componentWillUnmount(){
        this.removeEventListener('show-chr',this.onClick)
    }

    static get observedAttributes(){
        return ['chrhead','chrtext'];
        }


    render(){
        const {chrhead, chrtext} = this.props
        return`
        <div class="flue-characteristics">
            <div class="characteristics-name">
                <show-cross 
                    eventtype='show-chr'
                    content='${this.state.isVisible ? '+' : '-'}'
                    >
                </show-cross>
                <div class='characteristics-name-text'>
                    ${chrhead}
                </div>
            </div>
            <div class=${this.state.isVisible ? "characteristics-description" : 'hidden'}>
                ${chrtext}
            </div>
        </div>
        `
    }
}
customElements.define('flue-chr',FlueChr)

