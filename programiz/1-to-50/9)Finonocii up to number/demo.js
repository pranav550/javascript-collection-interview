//fibonocii up to n terms
function fibo(n){
 let n1=0,n2=1;
 let next;
 console.log(n1)
 console.log(n2)

next=n1+n2;
 while(next<=n){
    console.log(next)
    
    n1=n2;
    n2=next;
    next=n1+n2;
 }   

}

fibo(5)