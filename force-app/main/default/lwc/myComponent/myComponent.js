import { LightningElement } from 'lwc';
import ToastContainer from 'lightning/toastContainer';
import Toast from 'lightning/toast';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessageContainer extends LightningElement {
    connectedCallback() {
        const toastContainer = ToastContainer.instance();
        toastContainer.maxShown = 4;
        toastContainer.toastPosition = 'top-right';
    }
    showError() {
        Toast.show(
            {
                label: 'Sample Toast Title at {0}',
                labelLinks: [
                    {
                        url: 'https://www.salesforcebolt.com',
                        label: 'Salesforce Bolt'
                    }
                ],
                message:
                    'Do like, share and subscribe on {0}. Follow the {1} for new updates.',
                messageLinks: [
                    {
                        url: 'https://www.youtube.com/SalesforceBolt',
                        label: 'YouTube'
                    },
                    {
                        url: 'https://www.salesforcebolt.com',
                        label: 'Blog'
                    }
                ],
                mode: 'sticky',
                variant: 'error',
                onclose: () => {
                    console.log('###Toast Close');
                }
            },
            this
        );
    }
    showWarning() {
        const evt = new ShowToastEvent({
            title: 'Toast Warning',
            message: 'Some problem',
            variant: 'warning',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        console.log(evt)
    }
    showSuccess() {
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Opearion sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        console.log(evt)

    }
    showInfo() {
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Operation will run in background',
            variant: 'info',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        console.log(evt)
    }
}