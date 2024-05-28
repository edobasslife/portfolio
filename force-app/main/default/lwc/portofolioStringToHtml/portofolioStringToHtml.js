import { LightningElement,api } from 'lwc';

export default class PortofolioStringToHtml extends LightningElement {
    @api content
    isLoader = false

    renderedCallback(){
        if(this.isLoader){
            return false
        }
        if(this.content){
            this.isLoaded =true
            const container =this.template.querySelector('.htmlContainer')
            container.innerHTML =this.content
        }

    }
}