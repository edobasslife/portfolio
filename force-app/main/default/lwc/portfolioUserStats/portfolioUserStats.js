import { LightningElement,api} from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioUserStats extends LightningElement {
    trailheadRankImg =`${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png`
    @api badges//'141+'
    @api points //'164,625+'
    @api trails //'20+'
    @api rank

    renderedCallback(){
        if(this.rank){
            let url = `${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`
            this.trailheadRankImg =url
        }
    }


}