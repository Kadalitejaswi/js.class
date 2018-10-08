var hero={
    name:"Super man",
    power:["flying power","lazer eyes","muscle power"],
    age:25,
    birthyear:1993,
    address:{
        street:"goldenstreet",
        pincode:10001,
        state:"us"
    },
    readPower :function readPower(){
       return this.power
    }
}
var heroInfo=function(heroData){
    console.log(heroData);
    
}
heroInfo(hero);

var readHeroine=()=>{
    return "Super Women";
}
hero.readHeroine=readHeroine;
console.log(hero.readHeroine());

var removePower=(index,delcount)=>{
    hero.power.splice(index,delcount);
    return hero.power;
}
console.log(removePower(2,1));
console.log(removePower(1,1));

