![80/20](https://public-files.gumroad.com/img9k2mfcg89l3cs9qa0tjs1wvfp)
https://doesitmutate.xyz/

Methods in JavaScript exist only on objects
Primitives appear to have methods because JS temporarily wraps them in objects (auto-boxing)

- By default, methods create shallow copies
- Methods return specific data types — know what type you'll get back
- Only mutable types have mutating methods; immutable types only return new values

# Static Methods

You call directly on the constructor itself

# Instance Methods

You call on instances created from the constructor

# Array Methods

https://youtu.be/R8rmfD9Y5-c?si=Ub9cfpeetVjPuzwA

## Mutating

- shift(), unshift()
- splice(start, deleteCount, item1, item2)
- sort() Converts elements into strings, then sorts by Unicode

## Non-Mutating

- flat()
- slice(start, end)

Iterative Methods: map(), filter(), reduce(), forEach()
Query / Search Methods: find(), some(), every(), includes()

# Object Methods

## Mutating

- freeze() Freezing an object is the highest integrity level that JavaScript provides
- seal()
- assign(target, source)

## Non-Mutating

- Object.keys/values/entries(user));

# String Methods

All non-mutating because strings are primitives (methods use temporary wrapper objects)

# Methods inherited from Object.prototype `toString(), hasOwnProperty()`
