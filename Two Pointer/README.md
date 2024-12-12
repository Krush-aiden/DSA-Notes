# Two Pointer

## Summary of Important Two Pointer Patterns

- **Two Pointers for Pair/Matching Problems**: Left (from index 0) and right (from index `arr.length - 1`) pointers are typically used in sorted arrays to check pairs or compute values based on comparisons. For unsorted arrays, hashing can be used for better time complexity.
  - Problem: [Two Sum](https://leetcode.com/problems/two-sum/)

- **Subsequence problems** can be solved with two pointers by moving through both the sequence and the potential subsequence and checking for matches.
  - Problem: [Is Subsequence](https://leetcode.com/problems/is-subsequence/description/)

- **Sliding window problems** use two pointers to expand and contract a window efficiently.

- **Partitioning/Swapping**: Used for problems like 3-way partitioning or moving elements based on conditions (e.g., Dutch National Flag Problem).
  - Problem: [Sort Colors](https://leetcode.com/problems/sort-colors/description/)
