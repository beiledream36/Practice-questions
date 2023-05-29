// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJLm"); // returns false

function isAllUpperCase(str){
    if(str.length == 0){
        return false;
    }

    for(i=0;i<str.length;i++){
        if(str[i] != str[i].toUpperCase()){
            console.log(str[i])
            return false;
        }

    }

    return true;
}

console.log(isAllUpperCase("ABCD"),isAllUpperCase(""),isAllUpperCase("ABCDEFGHIJkLm"));