import { Component } from "../../core"

import '../organisms'

export class TemplateFuel extends Component{
    render(){
        return`
            <fuel-organism></fuel-organism>
            
        `
    }
}
customElements.define('template-fuel',TemplateFuel)