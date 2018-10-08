let ips=['192.168.13.1','192.168.13.2','192.168.13.3','192.168.13.4','192.168.13.5','192.168.13.6',
'192.168.13.7','192.168.13.8','192.168.13.9','192.168.13.10']
console.log(ips);
let impIps=[];
for(let ip=0;ip<ips.length;ip++){
    if(ips[ip]=='192.168.13.3'){
        impIps.push(ips[ip]);
    }
    if(ips[ip]=='192.168.13.10'){
        impIps.push(ips[ip]);
    }
    if(ips[ip]=='192.168.13.7'){
        impIps.push(ips[ip]);
    }
    if(ips[ip]=='192.168.13.1'){
        impIps.push(ips[ip]);
    }
   
}
console.log(impIps);
