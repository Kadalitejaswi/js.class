// let x=function(){
//     console.log(('I am x function called from other function'));
    
// }
// let y=(msg,callback)=>{
//     console.log('Do something here');
//      callback();
//      console.log(msg);
     
    
// }
// y("here",x);


// let calci=(num1,num2,calcitype)=>{
//   if(calcitype == 'add'|| calcitype=='+'){
//   return num1+num2;
//   }else if(calcitype == 'sub'|| calcitype=='-'){
//   return num1-num2;
//   }else if(calcitype == 'mul'|| calcitype=='*'){
//   return num1*num2;
//   }else if(calcitype == 'div'|| calcitype=='/'){
//   return num1/num2;
//   }else{
//       console.log("operation not permitted");
      
//   }
// }
// console.log(calci(30,50,'+'));

let num1=prompt("Enter num1")
let num2=prompt("Enter num2")
let type=prompt("Enter type")



let add=(a,b)=>{
    return a+b;
}
let sub=(a,b)=>{
    return a-b;
}
let mul=(a,b)=>{
    return a*b;
}
let other=(a,b)=>{
    return a/b;
}

let calci=(num1,num2,callback)=>{
    return callback(num1,num2);


}
console.log(calci(num1,num2,type));

// console.log(calci(20,50,add));
// console.log(calci(20,50,(a,b)=>{
//     return a-b;
// }));

