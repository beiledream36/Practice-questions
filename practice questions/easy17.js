//編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
// factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
function factorPrime(num){
    let a = num + ' = ';
    let p = 2;
    while(p<=num){
        if(num % p == 0){
            num /= p ;   
            a += p + ' x ';
        }else{
            p++;
        }
    }
    let a2 = '';
    for(i = 0; i<a.length-3;i++){
        a2 += a[i];
    }
    console.log(a2);
}
factorPrime(120);