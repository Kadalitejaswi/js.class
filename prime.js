let prime=+prompt("Enter the number to check prime or not")
for(i=0;i<=prime;i++)
if(prime%i==0){
    console.log("It's not a prime");
    
}else if(prime==1){
    console.log("Neither prime nor composite");
    

}else{
    console.log("Its a prime number");
    
}