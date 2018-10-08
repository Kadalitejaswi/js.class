function Projector(company,size,price,waranty){    /// object of projector type
    this.company=company;
    this.size=size;
    this.price=price;
    this.waranty=waranty;
}

let projector= new Projector('EPSON','2*2',40000,'2yeras');
projector.size='3*3';
console.log(projector);
let projector1= new Projector('SONY','20*20 cm',80000,'1yeras');

console.log(projector1);