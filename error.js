console.log('This is the first statement');

try{
console.log('This is the third statement');  // try catch statement and called error handling block
 fhbgjdfknhlk
console.log('This is the fourth statement');
// error obj contains a property called name,msg,stack
}catch(error){
console.log(error);
console.log("e name",error.name);
console.log("e msg",error.msg);
console.log("e stack",error.stack);

// finally block is always executing block
}finally{
console.log("Finally is always executing block");

}
console.log('This is the fifth statement');
console.log('This is the sixth statement');

