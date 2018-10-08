let ips=['192.168.13.1','192.168.13.2','192.168.13.3','192.168.13.4','192.168.13.5']
let friends=['Tejaswi','suseela','Sowjanya'];
let age=[24,25,26]

let combo=[ips,friends,age,"This is string"];
console.log(combo);
for(let comboIndex=0;comboIndex<combo.length;comboIndex++)
{
    console.log(combo[comboIndex]);
   for(let innerIndex=0;innerIndex<combo[comboIndex].length;innerIndex++){
       console.log(combo[comboIndex][innerIndex]);{
           
       }
       
   } 
   
}
