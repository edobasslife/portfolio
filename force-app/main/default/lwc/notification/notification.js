import { LightningElement, api } from 'lwc';

export default class Notification extends LightningElement {
    showNotification = false //initialize in false
    message
    variant

    get notifyClasses(){ //this method return the property's notification and variant
        let variantClass = this.variant === 'success' ? 'slds-theme_success':
        this.variant === 'warning' ? 'slds-theme_warning':
        this.variant === 'error' ? 'slds-theme_error':'slds-theme_info'
        console.log(this.variant)
        console.log(variantClass)
        return `slds-notify slds-notify_toast ${variantClass}`
    }
    @api showToast(message, variant){ //decorate to reference api, this method pass 2 parameters and return the notification
        this.message = message || "Please pass your message"
        this.variant = variant || 'success'
        this.showNotification = true
        setTimeout(()=>{
            this.showNotification = false
        },5000 ) // time to show notification
    }
}