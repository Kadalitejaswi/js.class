
var elem=document.createElement('section');
elem.setAttribute("id","sectid");
elem.setAttribute("class","sectclass");
var sectId=elem.getAttribute("id")
// console.log(sectId);

var elemp=document.createElement('p');
var elemh=document.createElement('h1');
elemh.innerHTML=`<h1>Welcome to DOM manipulation</h1>`
elemh.innerHTML=`<h1>New to DOM manipulation</h1>`//appending

elemp.innerText="Here all about dom Class"

elem.appendChild(elemh)
elem.appendChild(elemp)
document.body.appendChild(elem)
var h1=document.querySelector(".sectclass h1 ")
// h1.innerText="hi"

console.log(h1);
