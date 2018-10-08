var records=new Array();
alert('welcome to My app')
while(true){
let options=prompt(`Select one option!
1.Registration
2.Login
3.Exit`);
if(options==='1'|| options==='registration'||options==='2' || options==='login'|| options==='exit'||options==='3'||options===" "){
switch(options){
    case '1': case 'registration':
    console.log("registation selected");
  
    var name=prompt("Enter your name :")
    var email=prompt("Enter your email:")    
    var password=prompt("Enter your password:")    
    var mobile=prompt("Enter your Mobile :")    
    var user=new Object();
    user.name=name;
    user.email=email;
    user.password=password;
    user.mobile=mobile;

records.push(user)
alert('registraion done')
console.log(records);


    break;
    case '2': case 'login':
    console.log("Login selected");
     var email=prompt('enter your email')
    var password=prompt('enter your password')
    for(index in records){
if(records[index].email===email &&
    records[index].password===password){
        alert('login sucess')
    }else{
        alert('login failed')
    }
    }
    
    break;
    case '3':
    alert("exiting")
    console.log("exit");
    break;


    default:
    console.log("invalid option");
    
}}

else{
    console.log("invalid option");
    break;
}}