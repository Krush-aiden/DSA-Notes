# JavaScript Arrays: A Short Overview

An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) in JavaScript is a special type of object used to store multiple values in a single variable. It can hold elements of any type (numbers, strings, objects, etc.) and provides an ordered collection of data. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size during runtime.

## Basic Array Operations with Examples

1. **Creating an Array:**

```javascript
let arr = [1, 2, 3, 4, 5];
let value = arr[2];  // 3
arr.push(6);  //Added 6 in last index [1, 2, 3, 4, 5, 6]
arr.unshift(0);  //Added 0 in first index [0, 1, 2, 3, 4, 5, 6]
arr.pop();  // Removes 6 from last index, arr is now [0, 1, 2, 3, 4, 5]
arr.shift();  // Removes 0 from first index, arr is now [1, 2, 3, 4, 5]

arr.forEach(item => console.log(item)); //For loop
let index = arr.indexOf(3);  // 2
let length = arr.length;  // 5
```

**`splice()`**:

```javascript
array.splice(start, deleteCount, item1, item2, ...)
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(2, 2);  // Removes 2 elements starting from index 2
console.log(arr);  // [1, 2, 5]
console.log(removed);  // [3, 4]
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6, 7);  // Adds 6 and 7 starting at index 2
console.log(arr);  // [1, 2, 6, 7, 3, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6, 7);  // Replaces 3 with 6 and 7 at index 2
console.log(arr);  // [1, 2, 6, 7, 4, 5]
```

**`slice()`**:

```javascript
array.slice(start, end)
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 4);  // Extracts elements from index 1 to 3
console.log(newArr);  // [2, 3, 4]
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(2);  // Extracts from index 2 to the end
console.log(newArr);  // [3, 4, 5]
```

### Time Complexity of Array Operations

| **Operation**              | **Time Complexity**   | **Explanation**                                         |
|----------------------------|-----------------------|---------------------------------------------------------|
| **Access (arr[index])**    | O(1)                  | Direct access by index.                                |
| **Search (indexOf)**       | O(n)                  | Linear search through the array to find the element.    |
| **Insertion (unshift)**    | O(n)                  | Adds an element at the beginning; requires shifting elements. |
| **Insertion (push)**       | O(1)                  | Adds an element to the end (amortized).                 |
| **Deletion (shift)**       | O(n)                  | Removes the first element; requires shifting elements.  |
| **Deletion (pop)**         | O(1)                  | Removes the last element.                              |
| **Splice (insert/remove)** | O(n)                  | Inserts or removes elements, requiring shifting.        |
| **Slice**                  | O(n)                  | Creates a shallow copy of a portion of the array.       |
| **forEach**                | O(n)                  | Iterates over each element in the array.                |
| **map**                    | O(n)                  | Creates a new array with the results of applying a function to each element. |
| **filter**                 | O(n)                  | Creates a new array with elements that pass the test implemented by the provided function. |
| **reduce**                 | O(n)                  | Applies a function against an accumulator and each element (from left to right) to reduce it to a single value. |
| **split()**                | O(n)                   | Splits a string into an array of substrings based on a specified separator.               |
| **join()**                 | O(m)                   | Joins all elements of an array into a single string, with a specified separator.           |
