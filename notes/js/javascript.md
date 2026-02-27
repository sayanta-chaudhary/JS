https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

> Always bet on JS!

There are only 2 categories of data in JavaScript

# Primitive Types: The 7

Copied by value & Immutable
Wrapper objects provide methods for primitives using autoboxing
Autoboxing: temporarily treats primitives as objects to call methods, then immediately discards it

# Non-Primitive Types: Just object

Copied by reference & Mutable

<!-- Copied by reference value & Mutable -->

Everything that is not primitive is some kind of object
Object are used for:

- Data (structures & collections)
- Behavior (functions/methods)

## Types of Objects

### Core objects

- {} Plain Object
- [] Array
- function

### Special collection objects

- Map, Set, WeakSet, WeakMap

### Standard built-in objects

Constructor functions (instantiable with `new` keyword)

- Date, Error, Promise, RegExp

Namespace objects (static methods only)

- JSON, Math (utility objects)
- Namespace = Container object that groups related methods under one name to avoid naming conflicts

```text
JSON
├── parse()
└── stringify()
```

### Binary Data

- ArrayBuffer, Uint8Array

### Meta programming / Reflection

- Proxy, Reflect

Prototypal Inheritance mechanisms
Symbol and BigInt objects (wrapper constructors)

### Global Utilities

- globalThis, Intl, console

---

<!-- Primitive vs Non-Primitive is the foundation of how JavaScript stores, shares, mutates, and compares values. -->

- Know when to use Reference vs Copy
- Reassignment vs Mutation (Object & Array)
- Deep Copy & Shallow Copy
- Types of operators in JS
- let, const, var?
- what is callback just the function ?

# Foundations

https://solidifying-javascript-foundations.vercel.app/
https://github.com/leonardomso/33-js-concepts

# Quirks of JavaScript

https://github.com/denysdovhan/wtfjs
What is NaN property?
typeof null // "object" ❌ historical bug
