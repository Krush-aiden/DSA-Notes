
//Bubble sort

let arr = [7, 5, 9, 5, 2, 8];
// 0,1,2,3,4,5,6
          
let min = 0;
let temp = 0;

for(let i = 0; i<arr.length; i++){
  
    console.log('arr[i] -----',arr);
  for(let j = 0; j<arr.length-1-i; j++){
    console.log(arr[j], '>', arr[j+1])
      if(arr[j] > arr[j+1]){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
  
  console.log('sort :',arr);
  }
  
  
}

  console.log(arr);

  // Optimize Bubble sort

  // use the above array & variables 

let noswap = true;
for(let i = arr.length; i>1; i--){
  
    console.log('arr[i] -----',arr);
    console.log(i)
    noswap = true; //For optimization
  for(let j = 0; j < i-1; j++){
    console.log(arr[j], '>', arr[j+1])
      if(arr[j] > arr[j+1]){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        noswap = false;
      }
  // console.log('sort :',arr);
  }
  console.log(noswap);
if(noswap) break;  
}

  console.log(arr);