//Quick sort

let nums = [4,1,7,9,3,8];

let low = 0;
let high = nums.length - 1;

console.log('return ',quicksort(nums,low,high));

function quicksort(nums,low,high){
  // let low = 0;
  // let high = arr.length - 1;
  console.log('low-high',low, high);
  
  if(nums.length == 0) return nums;
  if(low >= high) return;

  if(low < high){
    let partion = swap(nums, low, high);
    console.log('partion',partion);
    quicksort(nums, low, partion-1);
    console.log('partionNew',partion);
    quicksort(nums, partion+1, high);
  } 
  
  return nums;
}

function swap(nums,low,high){
  
  let i = low;
  let j = high;
  // console.log('low-high',low, high);
    
  while( i < j ){
    let pivot = nums[low];
    // console.log('pivot',pivot);
    
    while(nums[i] <= pivot && i < high){
      i++;
    }
    while(nums[j] > pivot && j > low){
      j--;
    }
    
    console.log('before ---', nums);
  
    if(i<j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    }
    
  }
    // console.log('i-',i)
    // console.log('j-',j)
    
    let temp2 = nums[low];
    // console.log('nums[low], nums[j]',temp2, nums[j])
    nums[low] = nums[j];
    nums[j] = temp2;
    
  console.log('numss----', nums);
    return j;
}

