export const arrayMethods = [
  {
    id: "1",
    name: ".map()",
    definition: "The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.",
    code: "const array1 = [1, 4, 9, 16];\nconst map1 = array1.map((x) => x * 2);\nconsole.log(map1); // [2, 8, 18, 32]"
  },
  {
    id: "2",
    name: ".filter()",
    definition: "The filter() method creates a new array with all elements that pass the test provided by a given function.",
    code: "const array1 = [1, 2, 3, 4, 5];\nconst filtered = array1.filter((x) => x % 2 === 0);\nconsole.log(filtered); // [2, 4]"
  },
  {
    id: "3",
    name: ".reduce()",
    definition: "The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
    code: "const array1 = [1, 2, 3, 4];\nconst sum = array1.reduce((acc, current) => acc + current, 0);\nconsole.log(sum); // 10"
  },
  {
    id: "4",
    name: ".forEach()",
    definition: "The forEach() method executes a provided function once for each array element.",
    code: "const array1 = ['a', 'b', 'c'];\narray1.forEach((element) => console.log(element)); // a, b, c"
  },
  {
    id: "5",
    name: ".sort()",
    definition: "The sort() method sorts the elements of an array in place and returns the sorted array.",
    code: "const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];\narray1.sort();\nconsole.log(array1); // [1, 1, 2, 3, 4, 5, 5, 6, 9]"
  },
  {
    id: "6",
    name: ".concat()",
    definition: "The concat() method is used to merge two or more arrays, and it does not change the existing arrays but instead returns a new array.",
    code: "const array1 = [1, 2];\nconst array2 = [3, 4];\nconst merged = array1.concat(array2);\nconsole.log(merged); // [1, 2, 3, 4]"
  },
  {
    id: "7",
    name: ".indexOf()",
    definition: "The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not found.",
    code: "const array1 = [10, 20, 30, 40, 50];\nconst index = array1.indexOf(30);\nconsole.log(index); // 2"
  },
  {
    id: "8",
    name: ".slice()",
    definition: "The slice() method returns a shallow copy of a portion of an array into a new array object selected from a start and end index.",
    code: "const array1 = [1, 2, 3, 4, 5];\nconst sliced = array1.slice(1, 4);\nconsole.log(sliced); // [2, 3, 4]"
  },
  {
    id: "9",
    name: ".splice()",
    definition: "The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
    code: "const array1 = [1, 2, 3, 4, 5];\narray1.splice(2, 1); // Removes the element at index 2\nconsole.log(array1); // [1, 2, 4, 5]"
  },
  {
    id: "10",
    name: ".every()",
    definition: "The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
    code: "const array1 = [2, 4, 6, 8, 10];\nconst isEven = (element) => element % 2 === 0;\nconst allEven = array1.every(isEven);\nconsole.log(allEven); // true"
  },
  {
    id: "11",
    name: ".find()",
    definition: "The find() method returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.",
    code: "const array1 = [10, 20, 30, 40, 50];\nconst isThirty = (element) => element === 30;\nconst result = array1.find(isThirty);\nconsole.log(result); // 30"
  },
  {
    id: "12",
    name: ".reverse()",
    definition: "The reverse() method reverses the order of the elements in an array in place, without creating a new array.",
    code: "const array1 = [1, 2, 3, 4, 5];\narray1.reverse();\nconsole.log(array1); // [5, 4, 3, 2, 1]"
  },
  {
    id: "13",
    name: ".some()",
    definition: "The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.",
    code: "const array1 = [2, 4, 6, 7, 8];\nconst isOdd = (element) => element % 2 !== 0;\nconst hasOdd = array1.some(isOdd);\nconsole.log(hasOdd); // true"
  },
  {
    id: "14",
    name: ".join()",
    definition: "The join() method creates and returns a new string by concatenating all the elements in an array, separated by a specified separator string.",
    code: "const array1 = ['apple', 'banana', 'cherry'];\nconst joined = array1.join(', ');\nconsole.log(joined); // 'apple, banana, cherry'"
  },
  {
    id: "15",
    name: ".push()",
    definition: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
    code: "const array1 = [1, 2, 3];\nconst newLength = array1.push(4, 5);\nconsole.log(array1); // [1, 2, 3, 4, 5]"
  },
  {
    id: "16",
    name: ".pop()",
    definition: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
    code: "const array1 = [1, 2, 3, 4, 5];\nconst removedElement = array1.pop();\nconsole.log(removedElement); // 5"
  },
  {
    id: "17",
    name: ".shift()",
    definition: "The shift() method removes the first element from an array and returns that element. This method changes the length of the array.",
    code: "const array1 = [1, 2, 3, 4, 5];\nconst removedElement = array1.shift();\nconsole.log(removedElement); // 1"
  },
  {
    id: "18",
    name: ".unshift()",
    definition: "The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.",
    code: "const array1 = [3, 4, 5];\nconst newLength = array1.unshift(1, 2);\nconsole.log(array1); // [1, 2, 3, 4, 5]"
  },
  {
    id: "19",
    name: ".includes()",
    definition: "The includes() method checks if an array contains a specific element and returns true or false accordingly.",
    code: "const array1 = [10, 20, 30, 40, 50];\nconst hasThirty = array1.includes(30);\nconsole.log(hasThirty); // true"
  },
  {
    id: "20",
    name: ".findIndex()",
    definition: "The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. If no element satisfies the function, it returns -1.",
    code: "const array1 = [10, 20, 30, 40, 50];\nconst isThirty = (element) => element === 30;\nconst index = array1.findIndex(isThirty);\nconsole.log(index); // 2"
  },
  {
    id: "21",
    name: ".keys()",
    definition: "The keys() method returns a new array iterator that contains the keys (indices) of the array in order.",
    code: "const array1 = ['a', 'b', 'c'];\nconst keys = Array.from(array1.keys());\nconsole.log(keys); // [0, 1, 2]"
  },
  {
    id: "22",
    name: ".values()",
    definition: "The values() method returns a new array iterator that contains the values of the array in order.",
    code: "const array1 = ['a', 'b', 'c'];\nconst values = Array.from(array1.values());\nconsole.log(values); // ['a', 'b', 'c']"
  },
  {
    id: "23",
    name: ".copyWithin()",
    definition: "The copyWithin() method shallow copies a portion of an array to another location within the same array, without changing its length.",
    code: "const array1 = [1, 2, 3, 4, 5];\narray1.copyWithin(0, 3, 4); // Copies elements 3 and 4 to the beginning\nconsole.log(array1); // [4, 2, 3, 4, 5]"
  },
  {
    id: "24",
    name: ".fill()",
    definition: "The fill() method changes all elements in an array with a specified static value within a given range.",
    code: "const array1 = [1, 2, 3, 4, 5];\narray1.fill(0, 1, 4); // Fills with 0 from index 1 to 3\nconsole.log(array1); // [1, 0, 0, 0, 5]"
  },
  {
    id: "25",
    name: ".flatMap()",
    definition: "The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is similar to map() followed by a call to flat().",
    code: "const array1 = [1, 2, 3];\nconst doubledAndSquared = array1.flatMap((x) => [x * 2, x * 2 ** 2]);\nconsole.log(doubledAndSquared); // [2, 4, 4, 8, 6, 12]"
  },
  {
    id: "26",
    name: ".from()",
    definition: "The from() method creates a new, shallow-copied array instance from an array-like or iterable object.",
    code: "const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };\nconst newArray = Array.from(arrayLike);\nconsole.log(newArray); // ['a', 'b', 'c']"
  },
  {
    id: "27",
    name: ".lastIndexOf()",
    definition: "The lastIndexOf() method returns the last index at which a specified element is found in the array, or -1 if it is not found.",
    code: "const array1 = [10, 20, 30, 20, 40, 50];\nconst lastIndex = array1.lastIndexOf(20);\nconsole.log(lastIndex); // 3"
  },
  {
    id: "28",
    name: ".reduceRight()",
    definition: "The reduceRight() method applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.",
    code: "const array1 = [1, 2, 3, 4];\nconst product = array1.reduceRight((acc, current) => acc * current, 1);\nconsole.log(product); // 24"
  },
  {
    id: "29",
    name: ".fill()",
    definition: "The fill() method changes all elements in an array with a specified static value.",
    code: "const array1 = [1, 2, 3, 4, 5];\narray1.fill(0);\nconsole.log(array1); // [0, 0, 0, 0, 0]"
  },
  {
    id: "30",
    name: ".isArray()",
    definition: "The isArray() method checks whether the passed value is an array and returns true if it is, and false otherwise.",
    code: "const array1 = [1, 2, 3];\nconst isArr = Array.isArray(array1);\nconsole.log(isArr); // true"
  },
  {
    id: "31",
    name: ".map() with Index",
    definition: "Using the map() method with both the element and index as arguments to the mapping function.",
    code: "const array1 = [10, 20, 30];\nconst mapped = array1.map((value, index) => value * index);\nconsole.log(mapped); // [0, 20, 60]"
  },
  {
    id: "32",
    name: ".filter() with Index",
    definition: "Using the filter() method with both the element and index as arguments to the filtering function.",
    code: "const array1 = [5, 10, 15, 20, 25];\nconst filtered = array1.filter((value, index) => index % 2 === 0);\nconsole.log(filtered); // [5, 15, 25]"
  },
  {
    id: "33",
    name: ".some() with Index",
    definition: "Using the some() method with both the element and index as arguments to the testing function.",
    code: "const array1 = [2, 4, 6, 8, 9];\nconst hasOddIndex = array1.some((value, index) => index % 2 !== 0);\nconsole.log(hasOddIndex); // true"
  },
  {
    id: "34",
    name: ".every() with Index",
    definition: "Using the every() method with both the element and index as arguments to the testing function.",
    code: "const array1 = [3, 6, 9, 12, 15];\nconst allDivisibleByThree = array1.every((value, index) => value % 3 === 0 && index % 2 === 0);\nconsole.log(allDivisibleByThree); // true"
  },
  {
    id: "35",
    name: ".sort() with a Custom Comparator",
    definition: "Sorting an array with the sort() method using a custom comparator function to determine the order.",
    code: "const array1 = [100, 2, 30, 42, 5];\nconst customSort = (a, b) => a - b;\narray1.sort(customSort);\nconsole.log(array1); // [2, 5, 30, 42, 100]"
  },
  {
    id: "36",
    name: ".slice() with Negative Indices",
    definition: "Using the slice() method with negative indices to select elements from the end of the array.",
    code: "const array1 = [1, 2, 3, 4, 5];\nconst sliced = array1.slice(-3, -1);\nconsole.log(sliced); // [3, 4]"
  }

]
