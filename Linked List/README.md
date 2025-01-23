# Linked List

A **Linked List** is a linear data structure where elements (also called nodes) are stored in a sequence, but unlike arrays, the elements are not stored in contiguous memory locations. Each node in a linked list contains two parts:

- **Data**: The value or information stored in the node.
- **Next**: A reference (or pointer) to the next node in the list.

## Types of Linked Lists

There are several types of linked lists:

- **Singly Linked List**: Each node points to the next node in the list and the last node points to `null`.

    ```javascript
    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }
    ```

- **Doubly Linked List**: Each node points to both the next node and the previous node, allowing traversal in both directions.

    ```javascript
    class DoublyNode {
        constructor(data, next = null, prev = null) {
            this.data = data;
            this.next = next;
            this.prev = prev;
        }
    }
    ```

- **Circular Linked List**: In this type, the last node points back to the first node, creating a circular structure.

    ```javascript
    class CircularNode {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }
    ```

## Basic Operations

A linked list supports several operations:

- **Insertion**: Adding a new node to the list (at the beginning, end, or middle).

    ```javascript
    function insertAtHead(head, data) {
        let newNode = new Node(data);
        newNode.next = head;
        return newNode;
    }
    ```

- **Deletion**: Removing a node from the list.

    ```javascript
    function deleteNode(head, key) {
        let current = head;
        if (current != null && current.data === key) {
            head = current.next; // Move the head
            return head;
        }
        
        while (current != null && current.next != null) {
            if (current.next.data === key) {
                current.next = current.next.next;
                return head;
            }
            current = current.next;
        }
        return head;
    }
    ```

- **Traversal**: Visiting each node to perform an operation (e.g., printing data).

    ```javascript
    function printList(head) {
        let current = head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
    ```

- **Search**: Finding a specific element in the list.

    ```javascript
    function searchList(head, key) {
        let current = head;
        while (current !== null) {
            if (current.data === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    ```

## Advantages

- **Dynamic Size**: Linked lists do not require predefined memory allocation, so they can grow and shrink dynamically as elements are added or removed.
  
    ```javascript
    // A linked list dynamically grows and shrinks
    let head = null;
    head = insertAtHead(head, 10);
    head = insertAtHead(head, 20); // Linked list grows dynamically
    ```

- **Efficient Insertions/Deletions**: Inserting or deleting a node doesn't require shifting elements, unlike arrays. This makes insertion and deletion operations more efficient, especially when done at the beginning or middle of the list.

    ```javascript
    // Insertion at the head is efficient as only the `next` pointer changes
    head = insertAtHead(head, 30);  // Constant time insertion
    ```

## Disadvantages

- **Memory Overhead**: Each node requires extra memory for storing the pointer/reference, making linked lists more memory-intensive than arrays.

    ```javascript
    // Linked list uses more memory as each node stores both `data` and `next` references
    let node = new Node(10); // Requires additional memory for `next` pointer
    ```

- **Sequential Access**: Unlike arrays, linked lists do not allow direct access to elements via index. To access a node, traversal must be done from the head to the desired position.

    ```javascript
    // Accessing the 3rd node requires traversing the list from the head
    let current = head;
    let count = 0;
    while (current !== null && count < 3) {
        current = current.next;
        count++;
    }
    ```

## Use Cases

Linked lists are particularly useful in scenarios where:

- **Frequent insertion and deletion of elements** are required, especially at the beginning or middle.
  
    ```javascript
    head = insertAtHead(head, 50); // Frequent insertions at the head
    ```

- **Dynamic memory allocation** is needed (e.g., implementing dynamic data structures such as stacks, queues, etc.).

    ```javascript
    // Linked lists are used to implement stacks and queues
    let stackHead = null;
    stackHead = insertAtHead(stackHead, 10);  // Stack push operation
    ```

- The **size of the data set is not known in advance** and can change dynamically.

    ```javascript
    // A linked list can grow as needed
    let listHead = null;
    listHead = insertAtHead(listHead, 5);  // Insert as the list grows dynamically
    ```

![LinkedList](https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src/data-structures/linked-list/images/linked-list.jpeg)

[more about Linked List](https://leetcode.com/discuss/study-guide/1800120/become-master-in-linked-**list**)
