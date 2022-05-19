import { LightningElement, wire } from 'lwc';
import {registerListener} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
import { NavigationMixin } from 'lightning/navigation';
import createCase from '@salesforce/apex/CaseController.createCase';


export default class CaseDetail extends NavigationMixin(LightningElement) {

    @wire(CurrentPageReference) pageRef;
    case = null;
    accountName = null;
    accountId = null;
    subject = null;
    caseDate = null;
    description = null;
    showAccountAlert = false;

    connectedCallback(){
        registerListener('selectedAccount',this.handleAccountSelected, this);
    }

    
    handleAccountSelected(accountParam){
        let accountSelected = JSON.parse(accountParam);
        this.accountName = accountSelected.nome;
        this.accountId = accountSelected.id;
        this.showAccountAlert = false;
    }
    
    handleSubject(event){
        this.subject = event.currentTarget.value;
    }

    handleDate(event){
        this.caseDate = event.currentTarget.value;
    }

    handleDescription(event){
        this.description = event.currentTarget.value;
    }

    get isEnabledSave(){
        return this.subject != "" && this.subject != null && this.caseDate != null && this.description != null && this.description != "";
    }

    submitCase(){
        if (this.accountId == null){
            this.showAccountAlert = true;
        }else{
            createCase({caso : JSON.stringify(this.case), subject : this.subject, description : this.description, caseDate : this.caseDate, accountId : this.accountId}).then( (response) => {
                this[NavigationMixin.Navigate]({
                    type : 'standard__recordPage',
                    attributes : {
                        recordId : response.Id,
                        actionName : 'view'
                    }
                });

            } ).catch( (error) => {
                console.log('erro ao criar oportunidade', error);
            } );
        }       
    }
}