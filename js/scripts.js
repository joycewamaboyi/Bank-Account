// business logic
var currentAccount = "";

$(function(){
 //$("#input-date").val(Date().toISOString());
 $("#form-account").submit(function(event){
   event.preventDefault();

   var userName = $("#input-name").val();
   var balance = parseFloat($("#input-balance").val());
   if(isNaN(balance))
   {
     balance = 0;
   }
   var newAccount = new BankAccount(userName,balance);
   currentAccount = newAccount;
   newAccount.output();
 });