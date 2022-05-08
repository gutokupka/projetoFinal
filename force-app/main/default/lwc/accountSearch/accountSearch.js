import { LightningElement, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class AccountSearch extends LightningElement {

    @wire(CurrentPageReference)pageRef;

    handleSearch(event){
        let filter = event.target.value;
        fireEvent(this.pageRef, 'filterChange',filter);
    }
}