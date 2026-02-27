https://ui.dev/this-keyword-call-apply-bind-javascript

> The `this` keyword in JavaScript is arguably more complex than it should be

Q: Why the `this` keyword exists in the first place?
Q: What problem does `this` solve?
A: Allows you to reuse functions with different contexts / objects
A: `this` keyword allows you to decide which object should be focal when invoking a function
Why use `this` instead of the parameter name?

# `this` Binding Rules

The goal is to look at a function definition using the `this` keyword and tell what `this` is referencing
Ask yourself: Where is `this` function being invoked?

## Implicit Binding

if there is a "dot" `this` refers to the object to the left of the dot when the function is invoked
inside object methods = implicit binding

But, what if there is no dot? 👇

## Explicit Binding (Borrowing Method)

.call - it's annoying to pass arguments individually
Use .apply() or spread (...) to avoid that (pass the whole array)

The only diff between call/apply is how you pass arguments
Both explicitly set `this` and invoke the function immediately

.bind - Unlike call/apply, it does NOT invoke the function immediately
instead, it returns a new function with `this` permanently bound, returned function can be executed later

- Preserving `this` in callbacks or event handlers

Q: Why do arrow functions inherit `this` from the parent?
A: Because they were specifically designed to fix the “lost this in callbacks” problem 💡

The problem (before arrow functions)
Developers expected `this` to mean the same `this` as the parent function
but regular functions don’t work that way

```js
const user = {
  name: "Alice",
  greet() {
    setTimeout(function () {
      console.log(this.name); // ❌ undefined - `this` is lost
    }, 100);
  },
};
```

## Lexical Binding

- Unlike regular functions, arrow functions don't have their own `this`
  they inherit from the parent scope at the time they are defined
- This behavior makes arrow functions particularly useful for callbacks and preserving context

## new Binding (Constructor functions & Classes)

`this` refers to the newly created object

## Default Binding

When invoked as a standalone function (not attached to an object: func())
`this` typically refers to the global object (in non-strict mode) or undefined (in strict mode)

## DOM event handlers

`this` refers to the element that triggered the event
<!-- Behind the scenes: handleClick.call(el) `this` is explicitly set to element -->
<!-- `event.currentTarget` -->

### addEventListener

Without `this` hard-coded, not reusable

```js
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "red";
});
```

With `this` reusable handler

```js
function handleClick() {
  this.style.backgroundColor = "red";
}
btn.addEventListener("click", handleClick);
btn2.addEventListener("click", handleClick); // same handler, different element
```

### inline event handlers

<button onclick="handleClick()">Click</button>
Calling function directly, just like regular function call with no context = default binding
Fix: pass `this` as an argument
