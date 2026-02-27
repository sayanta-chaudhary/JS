Mental Model: Statements loop over time; methods loop over data
Condition-based loops are driven by conditions; iterable-based loops are driven by data
<!-- What loops? Way to repeat the same code multiple times -->
<!-- Loops offer a quick and easy way to do something repeatedly -->

https://javascript.info/while-for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

<!-- Object `key : value` -->
<!-- Array `index: element` -->

# Loop Categories

## Condition-based `for, while, do...while`
- While the condition is `truthy`, the code from the loop body is executed
- Repeat until condition is `truthy`, the code from the loop body is executed
- Any expression or variable can be a condition, not just comparisons
<!-- how for loop is diff from while -->

Control Flow Statements:
├── Conditional statements `if...else, switch, ternary`
├── Loop statements `for, while, do...while, for...in, for...of`
└── Jump statements `break, continue, return, throw`

Q: inline variable declaration vs outside?

https://javascript.info/iterable
## iterable-based 💡
- `for...of` iterates over values of iterable. Array methods `map, filter, reduce, forEach`
- Objects that implement the [Symbol.iterator] method are iterables
  - Some built-in types are iterable by default (Array, String, Map, Set)
- Array-likes are objects that have `indexes & length` so they look like arrays (arguments, NodeList)

## Property-based
- Objects don't implement the [Symbol.iterator] method
- So `for...in` is used to enumerate their properties, including inherited enumerable properties

<!-- Q: What makes enumerable property? -->
<!-- A: A property is enumerable when its enumerable attribute is true -->

<!-- Q: Own & inherited properties? -->
<!-- A: Properties of object/array literals or assignment are enumerable by default -->

Recursion: Function calling itself
Recursive functions: Alternative to traditional loops for certain problems

https://javascript.info/async-iterators-generators
Generator falls in iterator category
- What is iterator pattern ?

Async vs generator
Generator vs Promise ?

Generator = streams in node js

<!-- ----------------------------------------------------------------------- -->

while - repeat some code while some condition is true

```js
let username = "";
while (username === "" || username === null) {
  username = window.prompt(`Enter your name`);
}
console.log(`Hello ${username}`);
```

for...in - "in" means "inside the object" (keys)

- Loops over keys (property name) of an object
- Works on arrays too, but returns indexes (as strings), not actual values

```js
const obj = { name: "Alice", age: 26 };
for (const key in obj) {
  console.log(key, obj[key]); // Retrieves the value (definition) of the key (word)
  // Print what the object is contain this key
}
```

for...of - "of" means "from the collection" (values)

- Loops over iterable objects (arrays, strings, maps, sets)
- Directly returns values, not keys

Use `for...of` to play each song:

<!-- ```js -->
<!-- for (const song of playlist) { -->
<!--   console.log("Playing:", song); -->
<!-- } -->
<!-- ``` -->
