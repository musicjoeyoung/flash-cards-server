export const algosMethods = [
    {
        id: 1,
        name: "Bubble Sort",
        definition: "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
        code: "function bubbleSort(arr) {\n  let n = arr.length;\n  for (let i = 0; i < n-1; i++)\n    for (let j = 0; j < n-i-1; j++)\n      if (arr[j] > arr[j+1]) {\n        // swap arr[j] and arr[j+1]\n        let temp = arr[j];\n        arr[j] = arr[j+1];\n        arr[j+1] = temp;\n      }\n  return arr;\n}\nconsole.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]"
    },
    {
        id: 2,
        name: "Hash Map",
        definition: "A Hash Map (or Hash Table) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.",
        code: "class HashMap {\n  constructor() {\n    this.table = new Array(127);\n    this.size = 0;\n  }\n\n  _hash(key) {\n    let hash = 0;\n    for (let i = 0; i < key.length; i++) {\n      hash += key.charCodeAt(i);\n    }\n    return hash % this.table.length;\n  }\n\n  set(key, value) {\n    const index = this._hash(key);\n    this.table[index] = [key, value];\n    this.size++;\n  }\n\n  get(key) {\n    const index = this._hash(key);\n    return this.table[index];\n  }\n}\nconst hashMap = new HashMap();\nhashMap.set('name', 'John Doe');\nconsole.log(hashMap.get('name')); // ['name', 'John Doe']"
    },
    {
        id: 3,
        name: "Binary Search Tree",
        definition: "A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
        code: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinarySearchTree {\n  constructor() {\n    this.root = null;\n  }\n\n  insert(data) {\n    var newNode = new Node(data);\n    if (this.root === null) this.root = newNode;\n    else this.insertNode(this.root, newNode);\n  }\n\n  insertNode(node, newNode) {\n    if (newNode.data < node.data) {\n      if (node.left === null) node.left = newNode;\n      else this.insertNode(node.left, newNode);\n    } else {\n      if (node.right === null) node.right = newNode;\n      else this.insertNode(node.right, newNode);\n    }\n  }\n}\nconst BST = new BinarySearchTree();\nBST.insert(15); BST.insert(25); BST.insert(10);\nBST.insert(7); BST.insert(22); BST.insert(17); BST.insert(13);\nBST.insert(5); BST.insert(9); BST.insert(27);"
    },

    {
        id: 4,
        name: "Quick Sort",
        definition: "Quick Sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.",
        code: "function quickSort(arr, left = 0, right = arr.length - 1) {\n  if (left < right) {\n    const pivotIndex = partition(arr, left, right);\n    quickSort(arr, left, pivotIndex - 1);\n    quickSort(arr, pivotIndex + 1, right);\n  }\n  return arr;\n}\nfunction partition(arr, left, right) {\n  const pivot = arr[right];\n  let i = left - 1;\n  for (let j = left; j <= right - 1; j++) {\n    if (arr[j] < pivot) {\n      i++;\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n    }\n  }\n  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];\n  return i + 1;\n}\nconsole.log(quickSort([10, 80, 30, 90, 40, 50, 70]));"
    },
    {
        id: 5,
        name: "Merge Sort",
        definition: "Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.",
        code: "function mergeSort(arr) {\n  if (arr.length <= 1) {\n    return arr;\n  }\n  const middle = Math.floor(arr.length / 2);\n  const left = arr.slice(0, middle);\n  const right = arr.slice(middle);\n  return merge(mergeSort(left), mergeSort(right));\n}\nfunction merge(left, right) {\n  let resultArray = [], leftIndex = 0, rightIndex = 0;\n  while (leftIndex < left.length && rightIndex < right.length) {\n    if (left[leftIndex] < right[rightIndex]) {\n      resultArray.push(left[leftIndex]);\n      leftIndex++; // move left array cursor\n    } else {\n      resultArray.push(right[rightIndex]);\n      rightIndex++; // move right array cursor\n    }\n  }\n  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));\n}\nconsole.log(mergeSort([12, 11, 13, 5, 6, 7]));"
    },
    {
        id: 6,
        name: "Linked List",
        definition: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.",
        code: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\nclass LinkedList {\n  constructor() {\n    this.head = null;\n    this.size = 0;\n  }\n  add(data) {\n    var node = new Node(data);\n    var current;\n    if (this.head == null) this.head = node;\n    else {\n      current = this.head;\n      while (current.next) {\n        current = current.next;\n      }\n      current.next = node;\n    }\n    this.size++;\n  }\n}\nconst ll = new LinkedList();\nll.add(10); ll.add(20); ll.add(30); ll.add(40); ll.add(50);"
    },
    {
        id: 7,
        name: "Stack",
        definition: "A stack is an abstract data type that serves as a collection of elements, with two main principal operations: Push, which adds an element to the collection, and Pop, which removes the most recently added element that was not yet removed.",
        code: "class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(element) {\n    this.items.push(element);\n  }\n  pop() {\n    if (this.items.length == 0) return 'Underflow';\n    return this.items.pop();\n  }\n}\nconst stack = new Stack();\nstack.push(10); stack.push(20); stack.push(30); console.log(stack.pop()); // 30"
    },
    {
        id: 8,
        name: "Queue",
        definition: "A queue is an abstract data type that serves as a collection of elements, with two principal operations: Enqueue, which adds an element to the end of the queue, and Dequeue, which removes the first element of the queue.",
        code: "class Queue {\n  constructor() {\n    this.items = [];\n  }\n  enqueue(element) {\n    this.items.push(element);\n  }\n  dequeue() {\n    if (this.items.length == 0) return 'Underflow';\n    return this.items.shift();\n  }\n}\nconst queue = new Queue();\nqueue.enqueue(10); queue.enqueue(20); queue.enqueue(30); console.log(queue.dequeue()); // 10"
    },
    {
        id: 9,
        name: "Binary Search",
        definition: "Binary Search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated, and the search continues on the remaining half until it is successful.",
        code: "function binarySearch(arr, x) {\n  let start=0, end=arr.length-1;\n  while (start<=end){\n    let mid=Math.floor((start + end)/2);\n    if (arr[mid]===x) return mid;\n    else if (arr[mid] < x) start = mid + 1;\n    else end = mid - 1;\n  }\n  return -1;\n}\nconsole.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2"
    },
    {
        id: 10,
        name: "Depth-First Search (DFS)",
        definition: "Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.",
        code: "const graph = {\n  0: [1, 2],\n  1: [2],\n  2: [0, 3],\n  3: [3]\n};\n\nfunction dfs(graph, start, visited = new Set()) {\n  visited.add(start);\n  console.log(start);\n  graph[start].forEach((neighbor) => {\n    if (!visited.has(neighbor)) {\n      dfs(graph, neighbor, visited);\n    }\n  });\n}\ndfs(graph, 2);"
    },
    {
        id: 11,
        name: "Breadth-First Search (BFS)",
        definition: "Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.",
        code: "const graph = {\n  0: [1, 2],\n  1: [2],\n  2: [0, 3],\n  3: [3]\n};\n\nfunction bfs(graph, start) {\n  const visited = new Set();\n  const queue = [start];\n\n  while (queue.length) {\n    const vertex = queue.shift(); // Remove the first vertex from the queue\n    if (!visited.has(vertex)) {\n      visited.add(vertex);\n      console.log(vertex);\n      const neighbors = graph[vertex];\n      for (const neighbor of neighbors) {\n        queue.push(neighbor);\n      }\n    }\n  }\n}\nbfs(graph, 2);"
    },
    {
        id: 12,
        name: "Dijkstra's Algorithm",
        definition: "Dijkstra's Algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.",
        code: "function dijkstra(graph, start) {\n  const distances = {};\n  const parents = {};\n  const visited = new Set();\n  for (const vertex in graph) {\n    distances[vertex] = Infinity;\n    parents[vertex] = null;\n  }\n  distances[start] = 0;\n\n  let vertex = minDistance(distances, visited);\n  while (vertex !== null) {\n    const distance = distances[vertex];\n    const neighbors = graph[vertex];\n    for (const neighbor in neighbors) {\n      let newDist = distance + neighbors[neighbor];\n      if (newDist < distances[neighbor]) {\n        distances[neighbor] = newDist;\n        parents[neighbor] = vertex;\n      }\n    }\n    visited.add(vertex);\n    vertex = minDistance(distances, visited);\n  }\n  return distances;\n}\n\nfunction minDistance(distances, visited) {\n  let min = Infinity, minVertex = null;\n  for (const vertex in distances) {\n    if (!visited.has(vertex) && distances[vertex] < min) {\n      min = distances[vertex];\n      minVertex = vertex;\n    }\n  }\n  return minVertex;\n}"
    },
    {
        id: 13,
        name: "Heap",
        definition: "A Heap is a specialized tree-based data structure that satisfies the heap property: in a max heap, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C. In a min heap, the key of P is less than or equal to the key of C. The node at the 'top' of the heap (with no parents) is called the root node.",
        code: "class MinHeap {\n  constructor() {\n    this.heap = [];\n  }\n\n  insert(value) {\n    this.heap.push(value);\n    this.bubbleUp();\n  }\n\n  bubbleUp() {\n    let index = this.heap.length - 1;\n    const current = this.heap[index];\n\n    while (index > 0) {\n      let parentIndex = Math.floor((index - 1) / 2);\n      let parent = this.heap[parentIndex];\n      if (parent <= current) break;\n      this.heap[parentIndex] = current;\n      this.heap[index] = parent;\n      index = parentIndex;\n    }\n  }\n}\nconst minHeap = new MinHeap();\nminHeap.insert(2); minHeap.insert(3); minHeap.insert(1);\nminHeap.insert(15); minHeap.insert(5); minHeap.insert(4); minHeap.insert(45);"
    }



]
