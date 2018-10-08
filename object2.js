let john={
    firstname:"John",
    lastname:"smith",
    age:20,
    gender:"male",
    isMarries:true,
    children:null
}
// let data='john' in john
// console.log(data);

for(key in john){
    console.log(key);
    
    console.log("name of the key :"+key+" value :"+john[key]);
    
}
let keysData=Object.keys(john);
console.log(keysData);
for(index=0;index<Object.keys(john).length;index++){
    console.log(Object.keys(john)[index]);
    console.log("value"+john[Object.keys(john)[index]]);
    
}




var obj={'name','age','sex'}
console.log(obj);


var obj1=['n','a','s'];
console.log(obj1);

