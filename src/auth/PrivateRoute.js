import { appEvents } from "../constants/appEvents";
import { appRoutes } from "../constants/appRoutes";
import { Component, eventBus } from "../core";
import { authServiece } from "../servieces/Auth";

export class PrivateRoute extends Component{
    static get observedAttributes() {
        return ["path", "component", "title"];
      }

    static get observedAttributes(){
        return ['path']
    }
    componentDidMount(){
        if(!authServiece.user && this.props.path === window.location.pathname){
            eventBus.emit(appEvents.changeRoute,{
                target: appRoutes.SignIn
            });
        }
    }
    render(){
        return `<it-route 
          path="${this.props.path}" 
          component="${this.props.component}" 
          title="${this.props.title}"></it-route>`;
      }
}

customElements.define('private-route',PrivateRoute)