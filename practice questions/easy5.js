// 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。
// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2

function position(str){
    for(let i =0 ; i<str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            console.log(str[i],i);
            return true;
        }
    }
    console.log(-1)
    return false;
}

position("abcd"); // prints -1
position("AbcD"); // prints A 0
position("abCD"); // prints C 2
