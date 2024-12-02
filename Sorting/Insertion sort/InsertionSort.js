
//Insertion Sort

let arr = [4, 1, 3, 9, 7];
// 0,1,2,3,4,5,6
let temp = 0;  

for(let i = 1; i<arr.length; i++){
  
  for(let j = i; j>=1; j--){
      // console.log(j, j-1);
      console.log(arr[j], arr[j-1])
      if(arr[j-1] > arr[j]){
        temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
      
  }
}
console.log(arr);

