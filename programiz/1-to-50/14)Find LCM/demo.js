function findLCM(n1,n2){
let hcf;
let lcm;
for(i=1;i<=n1 && i<=n2; i++){
    if(n1%i==0 && n2%i==0){
        hcf=i
    }
}

lcm = (n1*n2)/hcf
console.log(lcm)

}

findLCM(60,72);

