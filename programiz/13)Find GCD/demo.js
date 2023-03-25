function FindGCD(x,y){
let hcf;
    for(let i=1;i<x && i<y; i++){
        if(x%i==0 && y%i==0){
            hcf=i
        }
    }
    console.log("hcf is:",hcf)

}

FindGCD(60,72)