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
   var newAccount = new Account(userName,accountNumber,address,telephone number,e-mail address,abalance);
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
     var num = deposit-withdraw;
     currentAccount.changeBalance(num);
     currentAccount.output();
   }
 });

//initial logic
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
function clear(num)
{
 $(num).val("");
}
function formatRWF(numString)
{
 return numString.toLocaleString('en-RW',{style: 'currency', currency: 'RWF'});
}
});
