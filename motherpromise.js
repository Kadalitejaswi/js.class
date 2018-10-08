let promiseToclean=new Promise(function(resolve,reject){
    let isClean= true;
    if(isClean){
        var room={
            status:'clean',
            message:"The room is clean",
        }
        resolve(room)
    }else{
        reject("The room is not clean")
    }
});
promiseToclean.then(function(room){
console.log(optFromResolve);
return room;

}).then(function(optFromfirstpromise) 
{ var result=`Room Status : ${room.status} now you can remove Garbage`
console.log(result);
return result;

    
}).then(function(optFromsecondpromise){
    var result=`${optFromsecondpromise} now you can take your reward`
console.log(result);
}).catch(function(optFromReject){
    console.log(optFromReject);
    
})