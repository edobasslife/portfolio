import { LightningElement,api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId //public
    @api objectApiName //public
    @api resumeUrl

    downloadResume(){

        window.open(this.resumeUrl,"_blank")

    }

    //https://github.com/edobasslife/ed-resume/blob/e782fbc89a41a0851fc150cd277df27a32c185ec/Eduardo%20Diaz%20salesforce.pdf

}
