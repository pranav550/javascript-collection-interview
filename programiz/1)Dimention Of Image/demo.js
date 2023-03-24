var img= new Image();

img.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQb0NnN1ocphwC4RSP-XpVCisTV5B1UQiErNWuI_aujg&s';

img.onload= function(){

    alert(this.width + 'x' + this.height);
    console.log(this.width)
    console.log(this.height)
    
    }