
//Selection Sort

let arr = [4,3,0,9,2,6,7];
// 0,1,2,3,4,5,6
let temp = 0;  
let swap = true;
let min = 0;

for(let i = 0; i<arr.length; i++){
    min = i;
    for(let j = i+1; j<arr.length; j++){
      // console.log(arr[i], arr[j])
        if(arr[min] > arr[j]){
          min = j;
        } 
    }
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
    
} 

console.log(arr);
