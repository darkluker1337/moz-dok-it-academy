import { Component } from "../../../core";
import './Input.scss'

export class Input extends Component{

        static get observedAttributes() {
            return [
            "type",
            "label",
            "control-name",
            "class-name",
            "value",
            "is-valid",
            "is-touched",
            "error-message",
            ];
        }

    render(){

        const controlClassName = JSON.parse(this.props['is-valid']) ? 'is-valid' : 'is-invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';
        
        return`
            <div class="flex-input">
                <label>${this.props.label}</label>
                <div class="input-form">
                <input 
                    type="${this.props.type}" 
                    class="form-control ${isAddClassName} ${this.props['class-name'] ?? ''}"
                    name="${this.props['control-name']}"
                    value="${this.props.value}"
                    >
                <div class="is-valid">${this.props['error-message']}</div>
                </div>
            </div>
        `
    }
}
customElements.define('it-input',Input)