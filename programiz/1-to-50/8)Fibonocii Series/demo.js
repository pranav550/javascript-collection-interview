function fibonocii(n){
let n1=0,n2=1;
let next;
for(let i=1; i<=n; i++){
    console.log(n1)
    next=n1+n2;
    n1=n2;
    n2=next;
}

}

fibonocii(5);

