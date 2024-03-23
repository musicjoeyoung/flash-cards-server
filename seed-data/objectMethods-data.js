export const objectMethods = [
  {
    id: "1",
    name: "Object.keys()",
    definition: "The Object.keys() method returns an array of a given object's own enumerable property names.",
    code: "const obj = { a: 1, b: 2, c: 3 };\nconst keys = Object.keys(obj);\nconsole.log(keys); // ['a', 'b', 'c']"
  },
  {
    id: "2",
    name: "Object.values()",
    definition: "The Object.values() method returns an array of a given object's own enumerable property values.",
    code: "const obj = { a: 1, b: 2, c: 3 };\nconst values = Object.values(obj);\nconsole.log(values); // [1, 2, 3]"
  },
  {
    id: "3",
    name: "Object.entries()",
    definition: "The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs.",
    code: "const obj = { a: 1, b: 2, c: 3 };\nconst entries = Object.entries(obj);\nconsole.log(entries); // [['a', 1], ['b', 2], ['c', 3]]"
  },
  {
    id: "4",
    name: "Object.assign()",
    definition: "The Object.assign() method is used to copy the values of all enumerable properties from one or more source objects to a target object.",
    code: "const target = { a: 1 };\nconst source = { b: 2, c: 3 };\nconst merged = Object.assign(target, source);\nconsole.log(merged); // { a: 1, b: 2, c: 3 }"
  },
  {
    id: "5",
    name: "Object.create()",
    definition: "The Object.create() method creates a new object with the specified prototype object and properties.",
    code: "const prototype = { x: 10 };\nconst newObj = Object.create(prototype, { y: { value: 20 } });\nconsole.log(newObj); // { y: 20 }"
  },
  {
    id: "6",
    name: "Object.keys() with hasOwnProperty",
    definition: "Using Object.keys() with hasOwnProperty to get an object's own enumerable properties while filtering out inherited properties.",
    code: "const obj = { a: 1, b: 2 };\nobj.__proto__.c = 3;\nconst keys = Object.keys(obj).filter(key => obj.hasOwnProperty(key));\nconsole.log(keys); // ['a', 'b']"
  },
  {
    id: "7",
    name: "Object.freeze()",
    definition: "The Object.freeze() method freezes an object, preventing new properties from being added and existing properties from being modified or removed.",
    code: "const obj = { a: 1, b: 2 };\nObject.freeze(obj);\nobj.c = 3; // This won't add 'c' to the object\nconsole.log(obj); // { a: 1, b: 2 }"
  },
  {
    id: "8",
    name: "Object.seal()",
    definition: "The Object.seal() method seals an object, preventing new properties from being added and existing properties from being removed, but allowing existing properties to be modified.",
    code: "const obj = { a: 1, b: 2 };\nObject.seal(obj);\nobj.a = 10; // Modifying 'a' is allowed\nobj.c = 3; // This won't add 'c' to the object\nconsole.log(obj); // { a: 10, b: 2 }"
  },
  {
    id: "9",
    name: "Object.getOwnPropertyDescriptor()",
    definition: "The Object.getOwnPropertyDescriptor() method returns a property descriptor for a named property on an object.",
    code: "const obj = { a: 1 };\nconst descriptor = Object.getOwnPropertyDescriptor(obj, 'a');\nconsole.log(descriptor); // { value: 1, writable: true, enumerable: true, configurable: true }"
  },
  {
    id: "10",
    name: "Object.keys() with Symbol properties",
    definition: "Using Object.keys() to get an array of a given object's own enumerable string-keyed properties, excluding symbol-keyed properties.",
    code: "const obj = { a: 1, [Symbol('b')]: 2 };\nconst keys = Object.keys(obj);\nconsole.log(keys); // ['a']"
  }
]
