// 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：
// pyramid(1);
// //*
// pyramid(2);
// //  *
// // ***
// pyramid(4);
// //    *
// //   ***
// //  *****
// // *******
function print_stars(space,stars){
    let result="";
    for(let i =0 ;i<space ;i++){
        result +=" ";
    }
    for(let i =0;i<stars ; i++){
        result +="*";
    }
    console.log(result);
}

function pyramid(num){
    let stars = 1;
    let space = num-1;
    for(let j=0 ; j<num;j++){
        print_stars(space,stars);
        stars +=2;
        space -=1;       
    }
}

pyramid(5);