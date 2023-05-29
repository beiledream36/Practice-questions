// 首幾個費波那契數是：0、1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987、…。
// 編寫一個名為fib的函式，唯一的參數是個整數n，回傳值為斐波那契數列的第n項。
// fib(0); // returns 0
// fib(1); // returns 1
// fib(2); // returns 1
// fib(3); // returns 2
// fib(8); // returns 21

function fib(n){
    let f= [];
    f[0] = 0;
    f[1] = 1;
    for(i=2; i<=n ; i++){
        f[i] = f[i-1] +f[i-2];
    };
    console.log(f[n]);
}
fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21