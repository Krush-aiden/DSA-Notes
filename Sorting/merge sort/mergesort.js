
//Merge Sort

function sorting(nums, low, med, high){
  let left = low;
  let right = med+1;
  let temp = [];
  
  while(left <= med && right <= high){
      if(nums[left] <= nums[right]){
          temp.push(nums[left]);
          left++;
      } else {
          temp.push(nums[right]);
          right++;
      }
  }       

  while(left <= med){
      temp.push(nums[left]);
      left++
  }

  while(right <= high){
      temp.push(nums[right]);
      right++
  }

  for(let i = low; i<=high; i++){
      nums[i] = temp[i-low];
  }
//console.log(nums);
  return nums;
}

function mergesort(nums , low = 0, high = nums.length-1){
      if(nums.length == 1) return nums;
     if(low >= high){
               return;
          }
      let med = Math.floor((low+high)/2)
      mergesort(nums,low,med);
      mergesort(nums,med+1,high);
  return sorting(nums, low, med, high);
};


let arr = [2,3,9,6,4,7];
// 0,1,2,3,4,5,6
// console.log(arr.length)
let low = 0;
let high = arr.length-1;
let check = 'start';

console.log(mergesort(arr, low, high, check));

