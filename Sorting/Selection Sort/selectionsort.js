
//Selection Sort

let arr = [7, 5, 9, 5, 2, 8];
// 0,1,2,3,4,5,6
          
let min = 0;
let temp = 0;

for(let i = 0; i <= arr.length-2; i++){
    min = arr[i];
    // console.log('min',min)
    for(let j = i+1; j<arr.length; j++){
        // console.log('arr[j]', arr[j]);

        if(min > arr[j]){
          min = arr[j];
          arr[j] = arr[i];
          arr[i] = min;
        }
    }
        // console.log(arr);
        
}

console.log(arr);
