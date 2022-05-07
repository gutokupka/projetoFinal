public with sharing class OpportunitySumary {

    @AuraEnabled
    public static List<Opportunity> getOpportunities(){
        return [SELECT Id, Name FROM Opportunity];
    }
 }
