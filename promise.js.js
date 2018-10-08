var promise=new Promise(function(resolve,reject){
  resolve(1000);
})

promise.then(first).then(second).then(third).then(function(response){
console.log("The last result  :  ",response);

}).catch(function(error){
    console.log(error);
    
})



function first(amount){
    console.log('the amount in first : ',amount);
   return amount*2
   
   
}

function second(amount){
    console.log('the amount in second : ',amount);
    return amount*2

}

function third(amount){
    console.log('the amount in third : ',amount);
    return amount*2
    
}