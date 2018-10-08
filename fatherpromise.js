
    var room={
        status:'clean',
        message:"The room is clean",
    }

let cleanRoom=function(){
    return new Promise(function(resolve,reject){
        if(room.status=='clean'){
    resolve(room)
        }else{
            room.status='not clean',
            room.message='room is not clean'
            reject(room)
        }
    })
}
let removeGarbage=function(room){
    return new Promise(function(resolve,reject){
    if(room.status=='clean'){
        room.removeGarbage='You can remove Garbage';
        room.isGbRmv=false;
        resolve(room);
    }else{
        room.removeGarbage='You cant remove Garbage',
        room.isGbRmv=false;
        reject(room)
    }
    })
}
let winReward=function(room){
    return new Promise(function(resolve,reject){
        if(room.isGbRmv){
            room.winmsg='You are worthy of this reward';
            resolve(room);
        }else{
            room.winmsg='you are not worthy of this reward',
    
            reject(room)
        }
    
    })
}
cleanRoom().then(function(result){
    console.log(result);
    return removeGarbage(result)
}).then(function(room){
    console.log(room);
    return  winReward(room)
}).then(function(room){
    console.log(room);
    
    

}).catch(function(resultFromReject){
    console.log(resultFromReject);
    
})