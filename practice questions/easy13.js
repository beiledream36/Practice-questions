//編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。
// isPrime(1); // returns false
// isPrime(5); // returns true
// isPrime(91); // returns false
// isPrime(1000000); // returns false

function isPrime(tf){
    if( tf == 1){
        console.log('false');
        return false;
    }
    let starter = 2;
    while(starter < tf){
        if(tf % starter == 0){
            console.log('false');
            return false;
        }
        starter++;
    }
    console.log('true');
    return true;
}

isPrime(1); 
isPrime(2); 
isPrime(5);
isPrime(17); 
isPrime(91); 
isPrime(1000000); 