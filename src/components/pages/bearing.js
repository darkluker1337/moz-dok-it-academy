import { Component } from "../../core";
import { databaseService } from "../../servieces/Database";

export class Bearing extends Component{
    
    constructor(){
        super()
        this.state = {
            isLoading:false,
            bearings:[],
        }
    }

    toggleIsLoading() {
        this.setState((state) => {
          return {
            ...state,
            isLoading: !state.isLoading,
          };
        });
      }

    getBearings(){
        this.toggleIsLoading();
        databaseService.read('bearings')
            .then((data)=>{
                console.log(data)
                this.setState((state)=>{
                    return{
                        ...state,
                        bearings: data
                    }
                })
            })
            .finally(()=>{
                this.toggleIsLoading()
            })
    }
    
    componentDidMount(){
        this.getBearings()
    }

    render(){
        return`
            <it-preloader is-loading="${this.state.isLoading}">
            <div class="Bearings-cart">
                ${this.state.bearings.map(({title, poster, cost, quanity, id})=>{
                    return`
                        <bearings-card
                            id="${id}"
                            poster="${poster}"
                            cost="${cost}"
                            title="${title}"
                            quanity="${quanity}"
                        >
                        </bearings-card>
                    `
                }).join(' ')}
            </div>
            </it-preloader>
        `
    }
}
customElements.define('bearing-page',Bearing)