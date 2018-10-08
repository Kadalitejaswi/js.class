function Motar(type,wheel,name,company,color){
    this.name=name;
    this.type=type;
    this.color=color;
    this.wheel=wheel;
    this.company=company;
}

Motar.prototype.speed=200;
Motar.prototype.changespeed=function(newspeed){
    this.speed=newspeed;
}
    


var bike=new Motar('petrol',2,'activa','hero','white');
bike.name='activa 4g'
bike.cc='120cc'
// bike.speed=function () {
//     return 120;
    

console.log(bike);
console.log(bike.speed);



var car=new Motar('Diesel',4,'verna','honda','white');
console.log(car);
car.changespeed(4000)
console.log(car.speed);



// proto type we can modify the constructor, instead of adding to blue print 
//we can add in prototype like inheritance.
