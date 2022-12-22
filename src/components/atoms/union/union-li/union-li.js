import { Component } from "../../../../core";

export class UnionLi extends Component{
    constructor(){
        super()
    }
    static get observedAttributes(){
        return ['content','classname'];
    }
    render(){
        const {classname,content} = this.props
        return`
            <li class="${classname}"><div>${content}</div></li>
        `
    }
}
customElements.define('union-li',UnionLi)