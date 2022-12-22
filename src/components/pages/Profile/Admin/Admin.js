import { Component, eventBus } from '../../../../core';
import './bearings-form'
import './news-form'
import './Admin.scss'
import { authServiece } from '../../../../servieces/Auth';
import { appRoutes } from '../../../../constants/appRoutes';
import { appEvents } from '../../../../constants/appEvents';
export class AdminPage extends Component{

    componentDidMount(){
        if(authServiece.auth.currentUser.uid !="8VDRiSooNlPnoo3yqI6ZsVTUCu43"){
            eventBus.emit(appEvents.changeRoute, {
                target: appRoutes.home,
            })
        }
    }

    render(){
        return`
        <h1>Админка</h1>
        <bearings-form-sender></bearings-form-sender>
        <news-form-sender></news-form-sender>
        `
    }
}
customElements.define('admin-page',AdminPage)








// componentDidMount(){
//     if (!authServiece.user) {
//         eventBus.emit(appEvents.changeRoute, {
//             target: appRoutes.SignUp,
//         });
//     }
// }









