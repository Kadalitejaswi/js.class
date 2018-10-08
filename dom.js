// create HTML element
// var elem=document.createElement('section');
// console.log(document.body)
// console.log(document.head)
// document.body.appendChild(elem)
// console.log(document.body);
// var div=document.createElement('div');
// document.body.appendChild(div)
// console.log(document.body);

//creating nested element
function createSection(){
var elem=document.createElement('section');
var elemp=document.createElement('p');
var elemh=document.createElement('h1');
elemh.innerText="Welcome to DOM manipulation"
elemp.innerText="Here all about dom Class"
elem.appendChild(elemh)
elem.appendChild(elemp)
document.body.appendChild(elem)
console.log(document.body);
}
function createDiv(){
var elemDiv=document.createElement('div');
var elemDivp1=document.createElement('p');
var elemDivh1=document.createElement('h1');
elemDivh1.innerText="Welcome to DOM manipulation in div"
elemDivp1.innerText="Here all about dom Class in div"
elemDiv.appendChild(elemDivh1)
elemDiv.appendChild(elemDivp1)
document.body.appendChild(elemDiv)
console.log(document.body);
}




