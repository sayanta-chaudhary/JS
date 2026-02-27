https://youtu.be/DqGwxR_0d1M?si=uZFFrA7YZ5ERXnX3

# What?

Prototypes are the mechanism by which JS objects inherit features from one another
All objects have a hidden `[[Prototype]]` property that's either another object or null

Class inheritence vs Prototype delegation?

## Getting the object's prototype

- What are extra properties, and where do they come from? `Object.getPrototypeOf()`
- The property of an object that points to its prototype is not called prototype
- Every object has a built-in property, which is called its prototype
- The prototype is itself an object, so the prototype will have its own prototype

Q: Own properties & inherited properties? `Object.hasOwn()`
A: Properties that are defined directly in the object, like name here, are called own properties

## Setting the object's prototype

Q: Why there're so many ways to manage `[[Prototype]]`
Getter/setter for `[[Prototype]]`

- Object.create(proto, propertiesObject)
  Create an object which will delegate to another object on failed lookups
  Never mess with the prototype directly ❌
- new Constructor()
- class / extends
<!-- - Object.assign() -->

# Why?

- Memory efficiency
- Shared methods/property
- Achive inheritance

> Prototypes are delegates!

All objects will delegate to Object.prototype on failed lookups
`console.log(Array.prototype)`
JavaScript has one inheritance mechanism: the prototype chain `([[Prototype]])`
Everything else is just syntax to set it:

Q: What if a method belongs to the class itself, but doesn't need to be shared across instances?
A: You can add it as a `static` property on the class (utility method)

# Re-implementing `new`

```js
const john = {}; // Create new object
john.__proto__ = Person.prototype; // Set object's [[Prototype]] to Constructor.prototype
Person.call(john, "hello"); // Execute constructor with `this` bound to new object
return john; // Return new object
```

# Re-implementing `Object.create`

```js
Object.create = function (objToDelegateTo) {
  function Fn() {} // Create an empty function
  Fn.prototype = objToDelegateTo; // Set the prototype of empty function equal to the argument object
  return new Fn(); // Execute empty function using the `new` keyword
};
```

https://ui.dev/beginners-guide-to-javascript-prototype

Getting the prototype of an object

- The standard way to access an object's prototype `Object.getPrototypeOf()`
- By default, the prototype object will have a constructor property
  that points to the original function or class that created the instance
- Any instances will be able to access their constructor via instance.constructor
- `getPrototypeOf` allows us to see the prototype of the instance itself

Determining if a property lives on the prototype

- There are certain cases where you need to know if a property lives on the instance
  itself or if it lives on the prototype the object delegates to

Check if an object is an instance of a Class

- To do this, you can use the instanceof operator `object instanceof Class`
- The way that instanceof works is it checks for the presence of `constructor.prototype` in the object's prototype chain

https://javascript.info/prototypes

- Shadowing properties: When a property with the same name is defined in the object's prototype?
- Writing doesn't use prototype. The prototype is only used for reading properties
  Write/delete operations work directly with the object
- Accessor property?
- Getters/setters?

Q: Factory function vs Constructor vs Class?
