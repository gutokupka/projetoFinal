import { LightningElement, api } from 'lwc';

export default class AccountCard extends LightningElement {

    _account;

    @api
    get account(){
        return this._account;
    }
    set account(value){
        let imagemVar = value.DisplayUrl__c == null ? 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg' : value.DisplayUrl__c;
        this._account = {id : value.Id, nome : value.Name, imagem : imagemVar};
    }

    selectaccount(){
        const accountSelected = new CustomEvent("selected", {
            detail : JSON.stringify(this._account)
        });
        this.dispatchEvent(accountSelected);
    }
}