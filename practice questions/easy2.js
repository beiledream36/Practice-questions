function table9to9(){
    for(x = 1; x<=9;x++){
        for(y = 1;y<=9;y++){
            console.log(`${x}×${y} = ${x*y}`);
        }
    }
};

table9to9();
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// ...
// 1 x 9 = 9
// 2 x 1 = 2
// 2 x 2 = 4
// ...
// 9 x 9 = 81