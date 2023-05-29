//編寫一個名為stars2的函式，功能為按以下模式打印出星星層：
//stars2(1);
// *
//stars2(3);
// *
// **
// ***
// **
// *
//stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
function stars2(num){
    let star = '';
    for(let i =0 ; i<num ; i++){
        star +='*';
        console.log(star);
    };
    for(let i=num;i>0;i--){
        star =''
        for(let j=1;j<i;j++){
            star +='*'
        }
        console.log(star);
    }
};
stars2(6);