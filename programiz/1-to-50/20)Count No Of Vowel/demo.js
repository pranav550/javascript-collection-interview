function CountVowel(str){
    let vowel = ["a","e","i","o","u"];
    count=0;
    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++
        }
    }
    console.log(count);

}
CountVowel("pranav verma");