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
 $("#form-balance").submit(function(event){
    event.preventDefault();
    if(currentAccount != "")
    {
      var deposit = parseFloat($("#input-deposit").val());
      var withdraw = parseFloat($("#input-withdraw").val());
      if(isNaN(deposit))
      {
        deposit = 0;
      }
      if(isNaN(withdraw))
      {
        withdraw = 0;
      }
      var temp = deposit-withdraw;
      //console.log(formatUSD(temp));
      currentAccount.changeBalance(temp);
      currentAccount.output();
    }
  });
 
 });