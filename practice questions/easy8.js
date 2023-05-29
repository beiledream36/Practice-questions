//編寫一個名為stars的函式，功能為按以下模式打印出星星層：
//stars(1);
// *
//stars(4);
// *
// **
// ***
// ****
function stars(num){
    let star = '';
    for(let i =0 ; i<num ; i++){
        star +='*';
        console.log(star);
    }
};
stars(1);
stars(10);