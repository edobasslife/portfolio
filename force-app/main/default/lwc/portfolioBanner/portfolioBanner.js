import { LightningElement, wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets' //import the location of zip files
import { getRecord,getFieldValue } from 'lightning/uiRecordApi'; //import this to getrecords and to track data
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c' // import this to get each field
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'

export default class PortfolioBanner extends LightningElement {
    @api recordId //='a00ak000006EtcIAAS'
    @api linkedinUrl // ='https://www.linkedin.com/in/eduardodiazti'
    @api trailheadUrl //='https://www.salesforce.com/trailblazer/edobass'



 userPic =`${PortfolioAssets}/PortfolioAssets/me.png`
 linkedin =`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
 trailhead =`${PortfolioAssets}/PortfolioAssets/Social/trailhead.svg`
 //youtube =`${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
// github =`${PortfolioAssets}/PortfolioAssets/Social/github.svg`
// twitter =`${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
 //blog =`${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`

 @wire(getRecord,{recordId:'$recordId',fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
 portfolioData//store data property here
 //wire is using in LWC to call methods, $ because is reactive

 /* portfolioHandler({data,error}){
    if(data){
        console.log("record Data", JSON.stringify(data))
    }
    if(error){
        console.error("error",error)
    }
 } */

 get fullName(){
    return getFieldValue(this.portfolioData.data,FULLNAME)
 }
 get companyLocation(){
    return getFieldValue(this.portfolioData.data,COMPANY_LOCATION)
 }
 get companyName(){
    return getFieldValue(this.portfolioData.data,COMPANY_NAME)
 }
 get designation(){
    return getFieldValue(this.portfolioData.data,DESIGNATION)
 }
}