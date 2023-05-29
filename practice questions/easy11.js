//編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。
// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a ma I"

function reverse(str){
    let r =  "";
    for(i = str.length-1 ; i >= 0 ; i--){
        r += str[i];
    }
    
    console.log(r);
} 

reverse("abcd");
reverse("I am a good guy.");

function reverse2(str){
    let r =  "";
    for(i = 0 ; i < str.length ; i++){
        r += str[str.length -1 -i];
    }
    
    console.log(r);
} 

reverse2("abcd");
reverse2("I am a good guy.");