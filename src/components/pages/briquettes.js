import { Component } from '../../core'
import '../templates'

export class Briquettes extends Component{

    render(){
        return`
        <template-briquettes></template-briquettes>
        `
    }
}

customElements.define('briquettes-page',Briquettes)