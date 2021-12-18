public with sharing class wsyhk_Login {

    @AuraEnabled()
    public static List<WSYHK_User__c> loginCheck(String userName){
        // List<WSYHK_User__c> user = 
        // [SELECT ID,NAME,WSYHK_UserName__c,WSYHK_Password__c FROM WSYHK_User__c WHERE WSYHK_UserName__c = :userName AND WSYHK_Password__c = :password];
        // System.debug(user);
        return[SELECT ID,NAME,WSYHK_UserName__c,WSYHK_NickName__c,WSYHK_Password__c FROM WSYHK_User__c WHERE WSYHK_UserName__c = :userName];
    }


}
