# Sliding Window

The **Sliding Window Technique** is a powerful problem-solving method used in algorithm design to optimize solutions, especially when dealing with arrays or sequences. This technique allows us to efficiently compute results on contiguous subarrays or subsequences in a linear time complexity.

## Key Concepts of Sliding Window Technique:

### 1. **Running Average**

A sliding window is used to efficiently calculate the average of a fixed-size window as new elements arrive in a stream of data. As elements enter or exit the window, the average is updated by adjusting only the part of the window that changed, making it more efficient than recalculating the average from scratch each time.

### 2. **Formulating Adjacent Pairs**

The sliding window technique is useful when you need to process adjacent pairs of elements in an ordered data structure. It allows you to easily access and operate on neighboring elements without needing to traverse the entire array.

### 3. **Target Value Identification**

When searching for a specific target value or combination of values in an array, the sliding window technique can help. By adjusting the window size and shifting it through the array, you can efficiently search for subarrays or subsequences that meet the criteria, such as finding a sum that equals a target.

### 4. **Longest/Shortest/Most Optimal Sequence**

The sliding window technique is helpful when you need to find the longest, shortest, or most optimal subsequence or subarray that satisfies a given condition in a collection. By sliding the window and tracking the relevant information within it, you can identify the desired sequence more efficiently than scanning the entire array.

## Advantages of Sliding Window Technique:

- **Efficiency**: Reduces time complexity from **O(n²)** or **O(n³)** to **O(n)**, making the algorithm much faster.
- **Memory Efficiency**: It allows you to process the input in a single pass, optimizing memory usage by maintaining a subset of data (the window) rather than storing large parts of the input.

### Basic Idea:

The main idea behind the sliding window technique is to convert **two nested loops** into a **single loop**. A "window" is essentially a subarray (or subsequence) of a fixed or variable size within the larger array. As the algorithm progresses, the window "slides" across the array, adjusting its size or position as needed.

---

## Types of Sliding Window:

### 1. **Fixed Size Window**

In this type of sliding window, the size of the window remains constant throughout the process. The window slides by adding a new element at the end and removing the element from the beginning, keeping the size fixed.

- **Example Use Case**: Calculating the moving average over a fixed number of recent data points in a stream of numbers.

### 2. **Variable Size Window**

In this type of sliding window, the size of the window can change as it slides. The window may expand or shrink based on certain conditions or criteria, such as the sum of elements, the length of a subsequence, or a target value.

- **Example Use Case**: Finding the smallest subarray whose sum is greater than or equal to a given target value.

---

## Time Complexity Optimization:

One of the major advantages of the sliding window technique is that it reduces the time complexity of solving certain problems. Instead of using nested loops, which could result in a time complexity of **O(n²)** or **O(n³)**, sliding window reduces this to **O(n)** by maintaining only a subarray or subsequence (the "window") that is updated efficiently.

---

## Techniques Used with Sliding Window:

### 1. **Hashing**

Hashing is often used in sliding window problems to efficiently track the elements within the window. A hash table allows for **constant time lookups** to check if an element is present in the window or to count its occurrences. This technique is especially useful for problems that involve checking the existence or frequency of elements in the window.

### 2. **Two Pointers**

Two pointers are commonly used to maintain the start and end of the sliding window. This technique efficiently moves the window forward by adjusting one or both pointers based on the problem’s requirements.

- **Left Pointer**: Marks the start of the window.
- **Right Pointer**: Marks the end of the window.

By adjusting these pointers, we can efficiently track the elements in the window, without needing to iterate through the entire array repeatedly.

### 3. **Sliding Window Optimization**

Sliding window optimization combines both hashing and two pointers to improve the performance of the algorithm. Hashing allows for fast lookups of elements within the window, while two pointers track the start and end of the window, ensuring efficient updates as the window slides across the array.

---

## Choosing the Right Technique:

The choice of technique for solving a sliding window problem depends on the problem’s constraints:

- **Hashing** is ideal when you need to track the presence or frequency of elements in the window and the window size is relatively small.
- **Two pointers** are better when the window size is large, or the problem requires efficient tracking of the window’s start and end points.
- **Sliding window optimization** (using both hashing and two pointers) provides the best performance for complex problems that require both quick lookups and efficient window adjustments.

---

## Identifying Fixed vs Variable Size Window:

### Fixed Size Window:

A fixed-size window has a predetermined size that doesn’t change as the window slides. You adjust the window by moving the start and end pointers, but the window always contains the same number of elements.

- **Example**: Finding the maximum sum of any subarray of size **k** in an array.

### Variable Size Window:

A variable-size window changes its size depending on certain conditions. The window can expand or contract as it slides, depending on the values or criteria you're looking for.

- **Example**: Finding the smallest subarray with a sum greater than or equal to a target value.

---

## Conclusion:

The Sliding Window Technique is a highly efficient approach for solving problems related to subarrays and subsequences. By reducing nested loops to a single loop and efficiently managing a sliding window, it improves both time and space complexity. Depending on the problem, combining sliding window with techniques like hashing and two pointers can optimize performance even further.

[For More Details about Sliding Window](https://leetcode.com/discuss/study-guide/3722472/mastering-sliding-window-technique-a-comprehensive-guide)
