  // Optimize Bubble sort when almost sorted

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