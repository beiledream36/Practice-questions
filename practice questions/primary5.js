// 編寫一個名為"shuffle()”的函數，唯一的參數為一個array of integers，return type也是array of integers，返回的array與參數array的元素相同，但元素順序為隨機排序的結果。
// shuffle([2, 11, 37, 42]); // 可能是[42, 11, 37, 2]

function shuffle(arr){
    let currentIndex = arr.length-1;
    let randomIndex ;
    for(let i =0; i <= arr.length-1 ;i++){
        randomIndex = Math.floor(Math.random()*(currentIndex));

        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
        currentIndex--;
        
    }

   
        console.log(arr);
    
    
}
for(j = 10;j<=20;j++){
    shuffle([2, 11, 37, 42,17,8,20,13]);
}

