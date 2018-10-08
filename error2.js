// try{
var emp={
    name:"john",
    id:786771,
    age:25,
    salary:20000,
    dept:"tech"
}
function empData(){
    try{
   if(emp.address==undefined){
    //    var error={
    //        name:"address is not found",
    //        msg:"address is not found in emp obj",
    //        stack:"Not found address is not found in emp obj"
    //    }
    throw new Error("address is not found in emp obj")
      
   }else{
       console.log(emp.addess);
       
   }
   }catch(err){
       if(err.name=='ReferenceError'){
        emp.address='Default flate ,Default Street,Default Area'
            console.log(emp);
            
    }else{
        throw err;
    }
// console.log("innererror handler",err);
// console.log("innererror handler",err.name);
// console.log("innererror handler",err.message);
// console.log("innererror handler",err.stack);

}
}try{
empData()

}catch(error){
    console.log("outer error haldling :",error.name);
    console.log("outer error haldling :",error.message);

    
}