// 回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。
// 寫一個名為palindrome的函式，它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。
// palindrome("bearaeb"); // true
// palindrome("whatever revetahw"); // true
// palindrome("Aloha, how are you today?"); // false

function palindrome(str){
    let i = 0;
    while(i <str.length -1 -i){
        if(str[i] != str[str.length -1 -i]){
            console.log('false');
            return false;
    }
    i++;
   }
   console.log('true');
   return true;
}

palindrome("bearaeb"); // true
palindrome("whatever revetahw"); // true
palindrome("Aloha, how are you today?"); // false