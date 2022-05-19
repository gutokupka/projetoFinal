public with sharing class CaseController {
  
    @AuraEnabled
    public static Case createCase(String subject, String description, Date caseDate, String accountId){

        Case caseObj = new Case();
        caseObj.Subject = subject;
        caseObj.AccountId = accountId;
        caseObj.CaseDate__c = caseDate;
        caseObj.Description = description;
        insert caseObj;

        return caseObj;
    }
    
}
