var user =new Object();
var accounts =new Array();
while(true){



var withdrawAmmount=function (){
    var accountNo=prompt("Enter account number");
    var access=findAccount(accountNo);
        if(access){
                var amount=prompt("Enter amount to withdraw");
                user.balane-=(+amount);
                
                alert(`${user.name} has balance ${user.balance}`)
                      
            }else{
                alert("Un authorized user..! ");
               
                
            } 
}
var findAccount=function (accountNo){
    for(account in accounts){
        console.log("data",accounts[accountNo]);
       
            if( accounts[account].accountNo == accountNo){
                console.log("Account found")
                var data={accountName:accounts[account].accountNo}

                return accounts[account].accountNo;
            }else{
                console.log("Account Wont exists"); 
                return false; 
            }
}
}
var showBalance=function (){
    var accountNo=prompt("Enter account number");
    var access=findAccount(accountNo);
    if(access){
                console.log("Account found");
                alert(`${user.name} has balance ${user.balance}`)
                
            }else{
                console.log("Account Wont exists");
                
            }   
    }

var openAccount=function (){
    const accountNo=prompt("Enter your account number :");
    const accountbalance=prompt("Enter your opening account balance");
    var accountname=prompt("Enter account name :");
    var email=prompt("Enter your Email id :");
    var mobile=prompt("Enter your Mobile Number")
    user.name=accountname;
    user.accountNo=accountNo;
    user.email=email;
    user.mobile=mobile;
    user.balance=accountbalance;
    accounts.push(user)
    alert("Account created successfully")
   
}

var operations=prompt(`Welcome to money bank
1.To create account
2.Show balance
3.withdrawl
4.Deposit`)

if(operations=='1'||operations=='2'||operations=='3'||operations=='4'){
    switch(operations){
     case '1':
     openAccount();
     break;
     case '2':
     showBalance();
     break;
     case '3':
     withdrawAmmount();
     break;
        default:
        break;
    }
    }
    else {
        break;
    }

}
