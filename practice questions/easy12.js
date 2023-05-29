//編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。
// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."


function swap(str){
    let r = "";
    for(let i = 0 ; i< str.length ; i++){
        if(str[i] == str[i].toUpperCase()){
            r += str[i].toLowerCase();
            
        }else{
            r+= str[i].toUpperCase();
        }
    }

    console.log(r);
}

swap("Aloha");
swap("Love you.");