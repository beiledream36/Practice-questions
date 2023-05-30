//編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：
// inversePyramid(4);
// // *******
// //  *****
// //   ***
// //    *

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

function inversePyramid(num){
  let stars = num*2 -1;
  let space = 0;

  for(let j =0;j<num;j++){
    print_stars(space,stars);
    stars -= 2;
    space += 1;
  }

}
inversePyramid(7);