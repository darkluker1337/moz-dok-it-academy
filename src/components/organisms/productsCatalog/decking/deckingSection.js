import { Component } from "../../../../core";
import './deckingSection.scss'

export class DeckingSection extends Component{
    render(){
        return`
        <div class="decking-section">
            <div class="decling-head">
                <p>ОАО «Мозырский ДОК» реализует мебельные настилы, изготовленные из древесины хвойных пород (сосна):</p>
            </div>
            <div class="decking-pictures">
                <p><img src="../../../assets/images/decking/table.jpg" alt="decking"></p>
                <p><img src="../../../assets/images/decking/2-1-600x306.jpg" alt="decking"></p>  
                <p><img src="../../../assets/images/decking/3.jpg" alt="decking"></p> 
                <p><img src="../../../assets/images/decking/1.jpg" alt="decking"></p>  
            </div>
        </div>
        `
    }
}
customElements.define('decking-section',DeckingSection)