import { LightningElement, wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c'
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c'
import LANGUAJE_FIELD from '@salesforce/schema/Portfolio__c.Languajes__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioOtherDetails extends LightningElement {
    superbadges=[]
    languajes =[]
    awards =[]
    awardIcon = `${PortfolioAssets}/PortfolioAssets/trophy.png`
    languajeIcon =`${PortfolioAssets}/PortfolioAssets/language.png`
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`
    @api recordId
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELD,AWARDS_FIELD,LANGUAJE_FIELD]

    })otherFieldsHandler({data,error}){
        if(data){
            console.log("otherFieldsHandler data",JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("otherFieldsHandler error",error)
        }
    
    }
    formatData(data){
        const {Awards__c,Languajes__c,Superbadges__c} =data.fields
        //this.awards = Awards__c && Awards__c.value ? Awards__c.value.split(','):[]
        this.languajes = Languajes__c && Languajes__c ?Languajes__c.value.split(','):[]
        this.superbadges =Superbadges__c && Superbadges__c ?Superbadges__c.value.split(';'):[]


    }
}