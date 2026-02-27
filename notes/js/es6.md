https://github.com/lukehoban/es6features
https://www.javascripttutorial.net/es6/

# https://javascript.info/destructuring-assignment

Unpack values from Arrays, or properties from Objects, into distinct variables

## Object Destructuring

- Function Params (Cleaner arguments)
- Api Responses (Extract only needed data)

## Array Destructuring

- React Hooks (useState)
- Swapping variables (Cleanest way to swap)

Spread (...) - Clone & Merge

- Expand an array or string into individual elements or properties
- An operator is a symbol/keyword that performs an action on values/operands

```js
const backpack = ["shirt", "pant", "jacket"];
console.log([...backpack]);
```

Rest of the parameters (...) - Handle extra/unwanted data

- Pack multiple arguments into an array

```js
const func = (...data) => {
  console.log(data);
};
func(1, 2, 3, 4);
```

Function Parameter Destructuring: Most Common in React Props & APIs

- Cleaner function signature by avoiding obj.property everywhere inside the function
- Only extracts needed properties instead of passing the whole object

```js
const user = { name: "Alice", age: 25, city: "NY" };
function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}`);
}
greet(user);
```

Object Destructuring for Cleaner Code

- Why? Avoids repeated user.name, user.age

```js
onst user = { name: "John", age: 30, email: "john@example.com" };
const { name, age } = user;
console.log(name, age);
```
