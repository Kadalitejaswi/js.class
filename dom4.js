var section=document.createElement("section");
var count=1;
function addPara(){
var p=document.createElement('p')
var input=document.createElement('input')
p.setAttribute('id',`para${count}`);
p.setAttribute('class',`para${count}`);
//input.setAttribute("name","email")
input.setAttribute("id",`name${count}`)

p.innerText=`para Text${count}`
section.appendChild(p)
section.appendChild(input)

document.body.appendChild(section)
count++
}
function select(){
    // var classPara=  document.getElementByclassName('para4')
    // document.getElementById('para2').innerText='new para'
 var inputs=document.getElementsByName("email")

    // var allpara=document.querySelectorAll('p')
    // // console.log(allpara[1]);
    // // allpara[0].innerText='new text'
    for(var i=0;i<inputs.length;i++){
    console.log(inputs[i]);
    } 
}
function sendText(){
var email1=document.getElementById(`name1`)
var email2=document.getElementById("name2")
console.log(email1.value);
console.log(email2.value);
email2.value='sec value'
}
function clearText(){
    var email1=document.getElementById('email1')
email1.value=''


}