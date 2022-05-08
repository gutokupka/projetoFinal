import { LightningElement,wire } from 'lwc';
import {registerListener, fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';


export default class AccountList extends LightningElement {

    @wire(CurrentPageReference)pageRef;

    filterName = null;
    accounts = [];
    page = 1;

    connectedCallback(){
        registerListener('filterChange', this.getFilter, this);
        this.getAccountJS();
    }


    getFilter(filterParam){
        this.filterName = filterParam;
        this.getAccountJS();
    }

    getAccountJS(){
        getAccounts({filter : this.filterName, pageNumber : this.page}).then((response) => {
            this.products = response;
            console.log('this.products', this.products)
        }).catch((error) => {
            console.log('ERRO AO BUSCAR PRODUTO', error);
        });
    }
}