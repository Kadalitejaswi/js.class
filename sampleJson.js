var user={
    
        "name":"K.Y.V",
        "age":20,
        "email":"hgdvhj@gmail.com",
        "password":"john",
        "address":{
            "flatno":147,
            "street":"P and T colony",
            "area":"Muncipal colony",
            "pincode":500103
        },
        "family":["Tejaswi","vamsi","Izzu"]
    

}
try{
    var h1=document.createElement("h1")
    var h4=document.createElement("h4")
    h1.innerText=user.name;
    h4.innerText=user.name+"      Family"
    var ul=document.createElement("ul")
    for(var i=0;i<user.family.length;i++){
    var li=document.createElement("li")
    li.innerText=user.family[i]
    ul.appendChild(li);

}
document.body.appendChild(h1)
document.body.appendChild(h4)

document.body.appendChild(ul)

}catch(error){
    console.log(error);
    
}
