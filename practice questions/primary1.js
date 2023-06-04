//編寫一個名為mySort的函式，參數為一個array of numbers，回傳值為一個將元素由小到大排序的array。
//mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

function mySort(arr){
   let workingIndex = arr.length-1;
    while(workingIndex >=0 ){
        let biggest = arr[0];
        let biggestIndex = 0;
        for(let i=0;i<=workingIndex;i++){
            if(arr[i]> biggest){ 
                biggest = arr[i];
                biggestIndex = i;
            }
        }
        let temp = arr[biggestIndex];
        arr[biggestIndex] = arr[workingIndex];
        arr[workingIndex] = temp
        workingIndex --;
        
    }   
    console.log(arr);
}
    

mySort([17, 0, -3, 2, 1, 0.5,10,99,5]);