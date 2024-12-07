# Recurssion

## Introduction to Recursion

### What is Recursion?

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. Using a recursive algorithm, certain problems can be solved quite easily. Examples of such problems are Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc. A recursive function solves a particular problem by calling itself with different parameters to solve smaller subproblems of the original problem. The called function may further call itself and this process might continue forever. So it is essential to know that we should provide a certain case in order to terminate this recursion process. We can say that every time the function calls itself with a simpler version of the original problem and moves toward the termination case or base case.

![Recurssion](https://static.takeuforward.org/wp/uploads/2023/02/image-3.png)

### Need of Recursion

Recursion is an amazing technique with the help of which we can reduce the length of our code and make it easier to read and write. It has certain advantages over the iteration technique which will be discussed later. A task that can be defined with its similar subtask, recursion is one of the best solutions for it. For example; The Factorial of a number.

### Properties of Recursion

Performing the same operations multiple times with different inputs.
In every step, we try smaller inputs to make the problem smaller.
Base condition is needed to stop the recursion otherwise infinite loop will occur.
Algorithm: Steps

**Step1** – Define a **base case:** Identify the simplest case for which the solution is known or trivial. This is the stopping condition for the recursion, as it prevents the function from infinitely calling itself.

**Step2** – Define a **recursive case:** Define the problem in terms of smaller subproblems. Break the problem down into smaller versions of itself, and call the function recursively to solve each subproblem.

**Step3** – Ensure the **recursion terminates:** Make sure that the recursive function eventually reaches the **base case**, and does not enter an infinite loop which is called as **Stack Overflow**.

**step4** – **Combine the solutions:** Combine the solutions of the subproblems to solve the original problem.

### What is Stack Overflow in Recursion?

Whenever recursion calls are executed, they’re simultaneously stored in a recursion stack where they wait for the completion of the recursive function. A recursive function can only be completed if a base condition is fulfilled and the control returns to the parent function. 

But, when there is no base condition given for a particular recursive function, it gets called indefinitely which results in a Stack Overflow i.e, exceeding the memory limit of the recursion stack and hence the program terminates giving a Segmentation Fault error. 

The illustration above also represents the case of a Stack Overflow as there is no terminating condition for recursion to stop, hence it will also result in a memory limit exceeded error.

![stack-overflow](https://static.takeuforward.org/wp/uploads/2023/02/image-4.png)

### Base Condition

It is the condition that is written in a recursive function in order for it to get completed and not to run infinitely. After encountering the base condition, the function terminates and returns back to its parent function simultaneously.

To get a better understanding of how the base condition is an integral part of recursive functions, let us see an example below :

Let’s say we have to print integers starting from 0 till 2 only, this will be how the pseudocode for it will look like

```javascript
function fact(n) {

    // BASE CONDITION
    if (n === 0 || n === 1)
        return 1;
    
    return n * fact(n - 1);
}

console.log("Factorial of 5 : " + fact(5));
```

### Recurssion Tree with example

- Here is the recursive tree for input 5 which shows a clear picture of how a big problem can be solved into smaller ones.
fib(n) is a Fibonacci function. The time complexity of the given program can depend on the function call.

```Javascript
// Function for fibonacci
function fib(n) {
    // Stop condition
    if (n === 0) return 0;

    // Stop condition
    if (n === 1 || n === 2) return 1;

    // Recursion function
    return fib(n - 1) + fib(n - 2);
}

// Driver Code
let n = 5;
console.log("Fibonacci series of 5 numbers is:");

// for loop to print the fibonacci series.
for (let i = 0; i < n; i++) {
    console.log(fib(i) + " ");
}
```

![RecurssionTree](https://media.geeksforgeeks.org/wp-content/uploads/20191107235734/fib1.jpg)

### How memory is allocated to different function calls in recursion?

When any function is called from main(), the memory is allocated to it on the stack. A recursive function calls itself, the memory for a called function is allocated on top of memory allocated to the calling function and a different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process continues.
Let us take the example of how recursion works by taking a simple function.

```Javascript
function printFun(test) {
    if (test < 1)
        return;
    else {
        console.log(test);
        printFun(test - 1); // statement 2
        console.log(test);
        return;
    }
}

// Driver Code
let test = 3;
printFun(test);

Output : 3 2 1 1 2 3 
```

![Recurssion-problem](https://media.geeksforgeeks.org/wp-content/cdn-uploads/recursion.jpg)

### Time Complexity

| **Recursion Type**               | **Recurrence Relation**                          | **Time Complexity** | **Explanation**                                           | **Example Problem**                          |
|-----------------------------------|--------------------------------------------------|---------------------|-----------------------------------------------------------|---------------------------------------------|
| **Linear Recursion**              | `T(n) = T(n-1) + O(1)`                          | `O(n)`              | One recursive call per step, processing each element once. | **Factorial** (`n!`)                        |
| **Binary Recursion**              | `T(n) = 2T(n/2) + O(n)`                        | `O(n log n)`        | Problem divides in half, with each level doing `O(n)` work. | **Merge Sort**                              |
| **Multiple Recursion**           | `T(n) = 2T(n-1) + O(1)`                        | `O(2^n)`            | Each call generates two recursive calls, leading to exponential growth. | **Naive Fibonacci**                         |
| **Tail Recursion**               | `T(n) = T(n-1) + O(1)` (with optimization)     | `O(n)` or `O(1)`    | Tail recursion can be optimized by the compiler to be `O(n)` or `O(1)` (constant space). | **Tail-Recursive Factorial**                 |
| **Divide-and-Conquer**            | `T(n) = 2T(n/2) + O(n)`                        | `O(n log n)`        | Example: Merge sort, where the problem is divided and then merged. | **Merge Sort**                              |
| **Binary Search**                 | `T(n) = T(n/2) + O(1)`                         | `O(log n)`          | Input is halved at each recursive step.                   | **Binary Search**                           |
| **Fibonacci (Naive Recursion)**   | `T(n) = T(n-1) + T(n-2) + O(1)`                 | `O(2^n)`            | Exponential calls are generated for each value of `n`.     | **Naive Fibonacci**                         |
| **Merge Sort**                    | `T(n) = 2T(n/2) + O(n)`                        | `O(n log n)`        | Problem is divided in half recursively and merged after.   | **Merge Sort**                              |
| **Quick Sort**                    | `T(n) = T(n-1) + O(n)` (average case)          | `O(n log n)`        | Partitions the array and recursively sorts the partitions. | **Quick Sort**                              |
| **Heap Sort**                     | `T(n) = O(n log n)`                            | `O(n log n)`        | Builds a heap and performs recursive heapify.              | **Heap Sort**                               |
| **Tower of Hanoi**                | `T(n) = 2T(n-1) + O(1)`                        | `O(2^n)`            | Exponential recursion due to multiple recursive calls for each disk. | **Tower of Hanoi Problem**                  |

[For More In-Depth GeeksforGeeks-Notes](https://www.geeksforgeeks.org/introduction-to-recursion-2/)
