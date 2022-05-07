import { LightningElement } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunitySumary.getOpportunities';

const columns = [
    {
        label : 'Id da Oportunidade',
        fieldName : 'Id',
        type : 'text',
        shortable : false
    },
    {
        label : 'Nome da Oportunidade',
        fieldName : 'Nome',
        type : 'text',
        shortable : true
    }
];


export default class OpportunitySumary extends LightningElement {

    columnsVar = columns;
    dataVar = [];

    connectedCallback(){
        
    }
}