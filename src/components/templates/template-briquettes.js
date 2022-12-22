import { Component } from "../../core"


export class TemplateBriquettesl extends Component{
    render(){
        return`
            <briquettes-organism></briquettes-organism>
        `
    }
}
customElements.define('template-briquettes',TemplateBriquettesl)