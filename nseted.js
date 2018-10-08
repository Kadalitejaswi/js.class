first(100,function(firstResult,error){
    if(!error){
        console.log("first callback result",firstResult);
       second(firstResult,function(secondResult,error){
        
        if(!error){
        console.log("second callback result",secondResult);
       third(secondResult,function(thirdResult,error){
        if(!error){
            console.log("second callback result",secondResult);}

        })
     } else{
        console.log("error occurs in second callback");

        }
       } )
    }else{
        console.log("error occurs in first callback");
        
    }

})


function first(amount,callback){
    callback(amount*2,false)
}

function second(amount,callback){
    callback(amount*3,false)
}

function third(amount,callback){
    callback(amount*2,false)
}