var name=prompt("Enter your name : ")
var email=prompt("Enter your email : ")
var age=prompt("Enter your age : ")

var validationPromise=new Promise(function(resolve,reject){
    var user={}; var error={}
if(isEmpty(name) || isNull(name) || isundefined(name) || isEmpty(email)|| isNull(email)
 || isundefined(email) ||isEmpty(age)|| isNull(age) || isundefined(age)){
    error.message='cant be empty'
    reject(error)

}else{
  user.name=name;
  user.email=email;
  user.age=age;
  resolve(user)
}
} );
validationPromise.then(function(user){
    console.log(user);
    
}).catch(function(error){
    console.log(error);
    
})



function isEmpty(value){
    return(value==="")?true:false;
}
function isNull(value){
    return(value===null)?true:false;
}
function isundefined(value){
    return(value===undefined)?true:false;
}


