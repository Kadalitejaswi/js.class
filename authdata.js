var emailId=prompt('enter your email')

const pass="rjy";
const email='rjy@g.com'
var login=function(){
    if(email===emailId){
        alert('user found')
        var passwd=prompt('enter password')
        if(pass===passwd){
            alert('login sucessfull')
        }else{
            alert('invalid password')
        }
}else{
    alert('email not found')
}
}
login();