// business logic
var currentAccount = "";
$(function(){
 $("#form-account").submit(function(event){
   event.preventDefault();
   var userName = $("#name").val();
   var accountNumber = $("#number").val();
   var balance = parseFloat($("#balance").val());
   if(isNaN(balance))
   {
     balance = 0;
   }
   var newAccount = new Account(userName,accountNumber,balance);
   currentAccount = newAccount;
   newAccount.output();
 });
 $("#form-balance").submit(function(event){
   event.preventDefault();
   if(currentAccount != "")
   {
     var deposit = parseFloat($("#deposit").val());
     var withdraw = parseFloat($("#withdraw").val());
     if(isNaN(deposit))
     {
       deposit = 0;
     }
     if(isNaN(withdraw))
     {
       withdraw = 0;
     }
     var temp = deposit-withdraw;
     currentAccount.changeBalance(temp);
     currentAccount.output();
   }
 });
});
//Create a constructor for object Task
function Account(inputUserName,inputAccountNumber,inputBalance){
 this.name = inputUserName;
 this.number= inputAccountNumber;
 this.balance = inputBalance;
}
Account.prototype.output = function ()
{
 $(".result").text(formatRWF(this.balance));
};
Account.prototype.changeBalance = function (amount)
{
 this.balance += amount;
}
function clear(temp)
{
 $(temp).val("");
}
function formatRWF(tempString)
{
 return tempString.toLocaleString('en-RW',{style: 'currency', currency: 'RWF'});
}
