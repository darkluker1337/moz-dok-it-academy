import { Component } from "../../core";
import '../templates'

export class FuelChips extends Component{

    render(){
        return`
        <template-fuel></template-fuel>
        `
    }
}

customElements.define('fuel-page',FuelChips)