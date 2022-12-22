import { appEvents } from "../../constants/appEvents";
import { Component } from "../Component";
import { eventBus } from "../EventBus";


export class Link extends Component {
    constructor() {
        super();
        this.isShadow = true
    }

    static get observedAttributes() {
        return ['to']
    }

    onClick = (evt) => {
        evt.preventDefault();
        eventBus.emit(appEvents.changeRoute, { target: this.props.to })
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
            <a style="text-decoration: none; color:gray" 
            href="${this.props.to}">
                <slot></slot>
            </a>
        `;
    }
} 

customElements.define('it-link', Link)