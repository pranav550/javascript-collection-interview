// arm strong range up to n terms

function ArmstrongNumber(x,y){

    for(let i=x; i<=y;i++){

        let temp=i;
        let sum=0;

        while(temp>0){

            let remainder = temp%10;
            sum+= remainder*remainder*remainder;
            temp=parseInt(temp/10);

        }

        if(sum==i){
            console.log(i);
        }
    }

    

}

ArmstrongNumber(5,500);

