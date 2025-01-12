# Binary Search

## Overview

Binary Search is a classic searching algorithm used to find the position of a target value within a **sorted array** or **sorted list**. It works by repeatedly dividing the search interval in half. If the target value is less than the item in the middle of the interval, the search continues in the lower half, or if the target is greater, it continues in the upper half. This process continues until the target value is found or the search interval is empty.

Binary Search is much more efficient than linear search, especially for large datasets, because its time complexity is **O(log n)**.

---

## How Binary Search Works

1. **Initialization**:
   - You start with two pointers: `low` (starting index of the array) and `high` (ending index of the array).

2. **Middle Element**:
   - Calculate the middle element `mid = (low + high) // 2`. Compare it with the target value `x`.

3. **Target Comparison**:
   - If `arr[mid] == x`, the target is found, and you return the index `mid`.
   - If `arr[mid] > x`, adjust `high = mid - 1` and repeat the search in the left half of the array.
   - If `arr[mid] < x`, adjust `low = mid + 1` and repeat the search in the right half of the array.

4. **Repeat**:
   - Continue adjusting `low` and `high` until the target is found or the search space becomes invalid (`low > high`).

---

## Binary Search Algorithm

### Iterative Implementation (JavaScript)

```javascript
function binarySearch(arr, n, x) {
    let low = 0, high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Target not found
}
```

### Fundamental Questions

 [Arranging Coins](https://leetcode.com/problems/arranging-coins/description/)  
  Topics: Binary Search, Math

 [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/description/)  
  Topics: Two Pointers, Sorting

 [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/description/)  
  Topics: Binary Search, Math

 Upper Bound  
  Topics: Binary Search

 Lower Bound  
  Topics: Binary Search

[More about Binary Search on GeeksforGeeks](https://www.geeksforgeeks.org/binary-search/)
