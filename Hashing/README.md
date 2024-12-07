# Hashing

## Difference between Hashing & Hashtable

| **Aspect**               | **Hashing**                                                   | **Hashtable**                                                 |
|--------------------------|---------------------------------------------------------------|--------------------------------------------------------------|
| **Definition**           | Hashing is the technique of mapping data to a hash code using a hash function. | A hashtable is a data structure that uses hashing to store data efficiently. |
| **Function**             | Hashing is used to convert keys to unique indexes. <br> **Important Hashing Functions:** <ul><li><b>Division Method:</b> Hashing function that uses a prime number to divide the key and produce a hash value based on the remainder. </li><li><b>Folding Method:</b> The key is divided into equal parts and summed or XORed to create a hash value. </li><li><b>Mid-Square Method:</b> The key is squared and the middle digits are used as the hash value.</li></ul> | A hashtable stores key-value pairs using hashing. It employs the hashing technique to determine where data is stored based on the computed hash value of the key. |
| **Nature**               | A concept or process.                                         | A data structure based on the hashing technique.              |
| **Role in Data Structures** | Provides the method to generate indices in hash-based collections like Sets, Maps, etc. | Uses hashing internally to implement fast key-value pair storage and retrieval. |
| **Purpose**              | To ensure that data can be quickly accessed and stored by generating a fixed-size value from a key. | To store data in a way that allows for efficient retrieval by keys using hash values. |
| **Examples**             | Hash functions used in Maps, Sets, and hashing algorithms.    | Hashtable, Map, Set, Dictionary, and HashMap are examples that implement hashing. |

## Hash Table (Basic Concept)

**Description:** A hash table itself is a fundamental data structure that stores key-value pairs. It uses a hash function to compute an index (hash code) into an array of buckets or slots, from which the desired value can be found. A hash table typically handles collisions using methods like chaining (linked lists) or open addressing (probing).
**Use case:** Hash tables are often used to implement associative arrays or databases, where fast lookup of data is necessary.
**Languages:** In JavaScript, this is implemented by Map and Set. In some other languages, such as Python, a dictionary is a type of hash table.

### Hash-Based Data Structures in JavaScript

In JavaScript, the following are the primary hash-based structures:

[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object): `Objects` in JavaScript can be used as hashmaps, where the keys are unique properties, and the values can be of any data type.

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map): The `Map` object stores key-value pairs where both keys and values can be of any data type. It is similar to an object but provides better performance for frequent additions and deletions of key-value pairs.
  
[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set): The `Set` object stores unique values. It is an unordered collection where each value can only appear once.

Additionally, there are two specialized hash-based structures that provide weak references:

[WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap): A `WeakMap` is similar to a `Map`, but it holds weak references to its keys. This means that if there are no other references to an object used as a key, the key-value pair can be garbage collected. `WeakMap` is typically used for memory-sensitive situations, like storing metadata about objects without preventing those objects from being garbage collected.

[WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet): A `WeakSet` is similar to a `Set`, but it holds weak references to its values. Like `WeakMap`, if there are no other references to an object stored in the `WeakSet`, it can be garbage collected.

### Collision-Handling Techniques

When working with **custom hash tables** or in low-level programming, managing collisions becomes essential. Two common techniques for collision handling are:

**Chained Hashing**: In chained hashing, each index in the hash table stores a linked list of entries that hash to the same index. This allows multiple entries to share the same hash value, efficiently handling collisions.
  
**Open Addressing**: In open addressing, when a collision occurs, the algorithm searches for the next available slot in the hash table. This can be done using various probing techniques such as linear probing, quadratic probing, or double hashing.

These techniques are particularly relevant when implementing custom hash table structures or when working with lower-level languages that provide more control over memory and data management.

### Difference between array hashing and hashing using the map

- Let’s understand the difference considering the array: [1, 2, 3, 1, 3, 2, 12]. Here, the maximum element of the array is 12. So, if we apply array hashing, we need an array of size 13. But if we apply the map data structure, it will be the following.
- ![Map](https://static.takeuforward.org/wp/uploads/2023/01/Screenshot-2023-01-28-190746.png)

### DIfference between HashSet & HashMap

| **Feature**               | **Set (HashSet equivalent in JavaScript)**     | **Map (HashMap equivalent in JavaScript)**     |
|---------------------------|-----------------------------------------------|-----------------------------------------------|
| **Purpose**                | Stores a collection of **unique values**.     | Stores **key-value pairs** (associative array). |
| **Data Structure**         | Uses a **hash table** internally.             | Uses a **hash table** internally.             |
| **Uniqueness**             | Allows only **unique values** (no duplicates). | **Keys** must be unique, but **values** can be duplicated. |
| **Elements**               | Contains **values only** (no associated keys).| Contains **keys and values** as pairs.        |
| **Null Values**            | Can store at most **one `null` value**.       | Can store **one `null` key** and multiple `null` values. |
| **Ordering**               | **Unordered**. Elements are not stored in any particular order. | **Ordered** (insertion order is preserved for both keys and values). |
| **Accessing Elements**     | Direct access to **values** (no key-value pairs). | Access values via **keys** (e.g., `map.get(key)`). |
| **Use Case**               | Used when you need to store a **set of unique values**. | Used when you need to store and retrieve data based on **key-value mapping**. |
| **Time Complexity (Average)** | O(1) for **add**, **delete**, and **has**. | O(1) for **set**, **get**, and **delete** (on average). |
| **Common Methods**         | `add()`, `delete()`, `has()`, `size()`        | `set()`, `get()`, `delete()`, `has()`, `size()` |
| **Thread Safety**          | Not thread-safe by default.                   | Not thread-safe by default.                   |
| **Allowing Duplicates**    | No duplicates allowed.                        | Duplicates allowed for **values**, but **keys** must be unique. |
| **Data Types Stored**    | Can store any data type (strings, numbers, objects, symbols). However, null can be stored only once.                        | Can store any data type as both keys and values (strings, numbers, objects, symbols, and even other Maps). |

### Object (in JavaScript)

| **Feature**               | **Object**                                    |
|---------------------------|-----------------------------------------------|
| **Purpose**                | Stores data in **key-value pairs**.           |
| **Data Structure**         | Based on a **simple object structure** (non-iterable). |
| **Uniqueness**             | **Keys** must be unique, but **values** can be duplicated. |
| **Elements**               | Contains **key-value pairs**.                 |
| **Null Values**            | Can store **one `null` key** and **`null` values**. |
| **Ordering**               | **Unordered** (no guaranteed order of properties). |
| **Accessing Elements**     | Access values using **dot notation** or **bracket notation**. |
| **Use Case**               | Used for storing simple data (key-value mapping). |
| **Time Complexity (Average)** | O(1) for **adding**, **accessing**, and **deleting** properties. |
| **Common Methods**         | `Object.keys()`, `Object.values()`, `Object.entries()`, `hasOwnProperty()`. |
| **Thread Safety**          | Not thread-safe by default.                   |
| **Allowing Duplicates**    | **Keys** must be unique, but **values** can be duplicated. |
| **Data Types Stored**    | **Keys**: Only **strings** or **symbols** can be used as keys. **Values**: Can store any data type (strings, numbers, objects, arrays, functions, etc.). |

[Striver-Notes](https://takeuforward.org/hashing/hashing-maps-time-complexity-collisions-division-rule-of-hashing-strivers-a2z-dsa-course/)

[Wiki](https://en.wikipedia.org/wiki/Hash_table#)
