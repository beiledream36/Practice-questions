// // 電腦科學中String的subsequence是指，可以通過刪除零個或多個元素而不改變剩餘元素的順序，從而產生的新的String，就是原先String的subsequence。
// 例如: book是brooklyn的subsequence。
// // 寫出能夠給定任兩個String，請判斷第一個string是不是第二個string的subsequence。
// console.log(isSubsequence("book", "brooklyn")); // true
// console.log(isSubsequence("CAATCGA", "TCAATCAGGATCCGCTGA")); // true
// console.log(isSubsequence("AATTAA", "TCAATCAGGATCCGCTGA")); // false

function isSubsequence(subs,str){
    if(subs == 0){
        return true;
    }
    let i = 0;
    let j = 0;
    while(str.length > j){
        if(subs[i] == str[j]){
            i++;
        }
        if(i >= subs.length){
            return true;
        }
        j++;
    }
    return false;
}

console.log(isSubsequence("book", "brooklyn")); // true
console.log(isSubsequence("CAATCGA", "TCAATCAGGATCCGCTGA")); // true
console.log(isSubsequence("CAATG", "TCAATCAGGATCCGCTGA")); // false