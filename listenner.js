var section=document.createElement('section');
var registerbutton=document.createElement('button');
var email=document.createElement('input');
var uname=document.createElement('input');
var password=document.createElement('input');
section.innerHTML="<h1>Registration Here!</h1>"
registerbutton.setAttribute("id","registerbutton");
registerbutton.setAttribute("type","button");
registerbutton.innerText=('send text')


email.setAttribute("id","email");
email.setAttribute("type","email");
email.placeholder=('enter your email')

uname.setAttribute("id","name");
uname.setAttribute("type","text");
uname.placeholder=('enter your name')

password.setAttribute("id","password");
password.setAttribute("type","password");
password.innerText=('enter your password')

section.appendChild(email)
section.appendChild(uname)
section.appendChild(password)
section.appendChild(registerbutton)

document.body.appendChild(section)

var section2=document.createElement('section');
var loginbutton=document.createElement('button');
var email1=document.createElement('input');
var uname=document.createElement('input');
var password1=document.createElement('input');
section2.innerHTML="<h1>Login Here!</h1>"
loginbutton.setAttribute("id","loginbutton");
loginbutton.setAttribute("type","button");
loginbutton.innerText=('send text')


email1.setAttribute("id","email1");
email1.setAttribute("type","email");
email1.placeholder=('enter your email')

password1.setAttribute("id","password1");
password1.setAttribute("type","password");
password1.placeholder=('enter your password')

section2.appendChild(email1)
section2.appendChild(password1)
section2.appendChild(loginbutton)

document.body.appendChild(section2)

var user={};var records=[]
var sendButton=document.getElementById('registerbutton')
sendButton.addEventListener('click',function (){
        user.email=document.getElementById('email').value
        user.password=document.getElementById('password').value
        user.name=document.getElementById('name').value
        console.log(user);
});
var loginButton=document.getElementById('loginbutton')
loginButton.addEventListener('click',function()
    {
        email=document.getElementById('email1').value
        password=document.getElementById('password1').value
        console.log(user);
       var h2=document.createElement ('h2')
       if(user.email===email && user.password===password){
           h2.innerText='Login Successfull !!!'
           console.log('login successfull !!');
           
       }else{
        h2.innerText='Login unSuccessfull !!!'
        console.log('login unsuccessfull !!');
       }
     section2.appendChild(h2)
     })

