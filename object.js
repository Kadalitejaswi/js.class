// let n=new Array('20','21','22')
// console.log(n);
// n.push('23')
// console.log(n);


var john={
    firstname:"John",
    lastname:"smith",
    age:20,
    gender:"male",
    isMarries:true,
    children:null
}
john.children=["johny","rohn"]
console.log(john);
console.log(john["age"])
console.log(john.age);
// john.age=john.age+5 //
// console.log(john.age);

// john.age=55;
// console.log(john.age);
// console.log("name   : "+john.lastname+"   age  :"+john.age);
// john.address="ammerpet"
// console.log(john.address);
john.address={
      flatno:"23",
      society:"reddy street"
};
console.log(john);

// console.log(john.children);
// console.log(john.children[0]);

let addresses=new Array();
addresses[0]={
    flatno:"23",
    society:"reddy street"
};
addresses[1]={
    flatno:"23",
    society:"reddy street"
};
console.log(addresses[0][1]);

