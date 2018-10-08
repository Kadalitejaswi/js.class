// var x=10;
// var z= x++;
// console.log(x);
// console.log(z);


// var y=10;
// var w= ++y;
// console.log(y);
// console.log(w);


let accessFlag;
let age=prompt("How much is your age?");
// if(age>18){
//     accessFlag=true
//     console.log("You are allowed to drive");
    
// }else{
//     accessFlag=false
//     console.log("You are not allowed");
    
// }
// console.log(accessFlag);
accessFlag=(age>3 && age<15)?"You are a baby not allowed to drive":
            (age>15 && age<18)?"you dnt have license to drive":
            (age>=18)?"you are allow to drive":
            "not allow, invalid data"
console.log(accessFlag);
