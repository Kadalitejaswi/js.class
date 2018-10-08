// //function definition or declaring a function
// function showMsg(){
//     console.log('Hi everyone');
    
// }
// showMsg(); // function call

// function showMsg1(name){
//     console.log('Hi ',name);
    
// }
// showMsg1('john smith'); 

// function showMsg2(name,age,dob,gender,email,phone){
//     var user={};
//         user.name=name;
//         user.age=age
//         user.dob=dob;
//         user.gender=gender;
//         user.email=email;
//         user.phone=phone;

//         console.log("The user is :",user);
        
// }
// showMsg2('john smith',25,'28-02-1990','male','john@gmail.com',9874563210)

// function showMsg3(user){
//     console.log(user)
// }    
// var user={
//     name:'john',
//     age:20,

// }
// showMsg3(user);

//function definition or declaring a function
function showMsg(name='john',age){
    console.log('Hi everyone',name,age);
    return {name:"john"};
}
var data=showMsg();
console.log('This is return value :',data);

showMsg('rock')


function add(x,y){
  x+y;
}
 console.log(add(5,2));
 