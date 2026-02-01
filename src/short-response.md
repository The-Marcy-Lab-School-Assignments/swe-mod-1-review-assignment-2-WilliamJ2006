# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

15 will be logged because `playlist2` is a shallow copy of `playlist 1`, any changes made to `playlist2` will effect the original because they share the same memory address.

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true },
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. `filter` array method because I need an array that fufills a certain condition and has a different length then the original.

2. `find` array method, allows me to find a target object, I would assign the output to a varible and then do `variable.grade = 90`.

3. `reduce` array method, allows me to take multiple numbers and return an output as one number, I would assign that to a variale and then divide the variable by the length of the array.

4. `map` array method, I'll create a new array where for each student which is assigned to a variable it'll return
   `${variable.name}: ${variable.grade}`.

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ["a", "b", "c", "d"];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error occurs because `capitalize()` is executed immediately instead of being passed as a callback to .map(). This causes `undefined.toUpperCase()`. The fix is to pass wrap it in an arrow function `(letter => capitalize(letter))` or just use `capitalize` without parenthesis.

To avoid this error, it's key to remember that when a function is used inside a callback function, it will exectute the funtion immediately instead of for each element.

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 },
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
  - What is the value of sum?
  - What is the value of order?
  - What gets returned?

### Response 4

The `grandTotal` will equal to 135 after totaling every total value each object of `orders`.

The `0` at the end is important as it ensures that the sum will start at `0` instead of the first `total` value, this prevents errors and inconsistent behavior in our code if something in the objects were to be changed.

The value of `sum` is `0`, the value of `order` is each object of the `orders` array. The value of `order.total` is `45`, the first `total` of the first object. What gets returned is also `45` because `0 + 45 = 45`.
