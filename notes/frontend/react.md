https://react.dev/reference/react
https://react.gg/visualized

# React Ecosystem

# TERMS

Elements: Describe what should appear on screen
Components: Reusable functions that return elements
Mutability vs immutability Mutability: Never modify data always create new versions

# Core features

Q: Functional vs Class Components? - State & Lifecycle

## Composition

https://react.dev/learn/thinking-in-react 💡
f(g(x)) Composition with children is one of the core idea in React once you understand it
layouts, wrappers, modals, and React Router's <Outlet /> will make sense instantly
Layout -> Page -> Section -> Component

- The idea of putting components inside layouts & passing props/children)
- React invented this pattern (component-composition model) not React Router
- children in React ≈ "innerHTML" of </div> but more powerful

View = Component(State, Props)
Component = Pure function
Pure function = same input always gives same output, no side effects (it only returns value)
Side effects = console.log, API calls, writing files, DOM changes, modifying external state
State is also not React-specific
State = data that persists (current & previous values), changes over time, and influences program behavior
State in React is component-specific memory that triggers re-renders when it changes

<!-- - A function becomes impure not because it changes its return value, but because it interacts with the outside world -->
<!-- Any observable behavior beyond the return value violates purity -->
<!-- - Why React component is pure function? - predictable, consistent, reusable, testable rendering -->

Q: Why state makes the component re-render?
Q: Why useState instead of just variables in React?

The name useEffect comes from side effect — it gives the component a safe place to do things outside the pure render function

# Hooks

- Organizing our components by lifecycle methods
- React has no good primitive for sharing non-visual logic

https://www.codesmith.io/blog/what-are-hooks-in-programming 💡
Hooks are just functions that runs automatically when an event happens; it's not react-specific
but React hooks are different they only run during component's lifecycle

Lifecycle is also not React-specific term
Every system has its own sequence of steps its own lifecycle

- Browsers have DOM lifecycle
- Frameworks have request/response lifecycles
- Game engines have an entity lifecycle
- Operating systems have process lifecycle

Why hooks don't work inside classes?
Use arrow function in `useState` to prevent re-executing complex initial values on re-renders
What exactly is the difference between middleware & hooks?

## useEffect

Should be placed where the effect belongs, — not always in App.jsx
ideally inside the component that directly uses that effect

```jsx
useEffect(() => {
  // componentDidMount & componentDidUpdate (when dependencies change)
  return () => {
    // componentWillUnmount (cleanup function)
    // also runs BEFORE re-running the effect
    // class components did NOT run cleanup before updates, but functional components do
  };
}, [dependencies]);
```

https://react.dev/learn/you-might-not-need-an-effect

# React's render lifecycle

Functional components do not use the old component lifecycle
https://react.dev/learn/render-and-commit
Trigger -> Render phase -> Commit phase -> Browser paint -> Effects phase

So turning an uncontrolled element controlled simply means connecting it to React state
That’s it. Nothing more, Nothing fancy

```jsx
export default function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      // The real reason input text doesn’t disappear:
      // React didn’t recreate the <input> DOM node, so its DOM value remained intact
      <input /> // Why this doesn't change between render
    </>
  );
}
```

https://www.joshwcomeau.com/react/why-react-re-renders/

- When a component re-renders, it also re-renders all of its descendants
- By default, all descendants of a component will re-render if that component's state changes

---

6 Pro Tips from React Developers
https://youtu.be/xa-_FIy2NgE?si=dxQVquUsj3rYbr55

https://reactresources.com/topics/case-studies
https://softchris.github.io/books/react/
https://www.patterns.dev/react/
https://daveceddia.com/ https://www.purereact.com/

<!-- https://fsharpforfunandprofit.com/ -->

React is all about:
Event handling
Refs Handling
Portals

# React patterns

https://reactpatterns.com/
https://www.patterns.dev/react/

## Render props

## Higher-Order Components

- Component inside component doing calculation inside and returning modified component like highter order function
- Why we just can't use the normal component and modify that directly - reusability
  it's adding props and state to modify passed component

# Hard Problems!

- Routing
- Data Fetching
- State management
- Forms
- Rendering Strategies
  - Static & Dynamic Rendering (WHEN)
  - SSR & CSR (WHERE)

Q: What are the vanilla JS/DOM equivalents of React features?

---

# Before-react

https://products.thecodedose.com/javascript-mastery#curriculum
https://kentcdodds.com/blog/javascript-to-know-for-react

Beginner React Mistakes?

# Regex: `. ^ $ \* - ? () [] {} \ |` Validate & Search through text

# Operator

# Type Coercion

# Truthy

Falsy Values - null, undefined, NAN, 0 and ""
https://ui.dev/javascript-double-equals-vs-triple-equals

<!-- what is Operator what makes the Operator the Operator -->
<!-- is this when it works to the only one data value or what -->

Ternary operator: literally means composed of three parts `condition ? trueValue : falseValue`
Optional chaining: `const value = obj?.property` Elvis Operator

<!-- Stops at null or undefined, returns undefined instead of error -->

Nullish coalescing operator: `const foo = null ?? "default string"`

diff between booleans vs truly & falsy
“truthy” and “falsy” are JavaScript-specific concepts

false, 0, -0, 0n, "", null, undefined, NaN
Everything else is truthy 👇
"0" // truthy
[] // truthy
{} // truthy
function(){} // truthy

nullish, optional chaining

how other programming language do the things that can be done using truthy falsy if they don't have this truthy falsy

<!-- - truthy & falsy? -->
<!-- where does truthy falsy falls in my this list -->
<!-- what things make the value truthy or falsy -->
<!-- how to spot them -->
<!-- why does this exist in the first place -->

# Concurrent Rendering (rendering model)

now what is React Compiler

it's like Concurrent Rendering then Concurrent rendering then react Compiler

https://react.dev/blog/2022/03/29/react-v18
https://youtu.be/MPCVGFvgVEQ?si=0uL_FS0TpYgSAozw
https://youtu.be/0ympFIwQFJw?si=taNLoO12p7QLkKHv

Developer Code (Components, Hooks, State)
           ↓
React Core (createElement, hooks)
           ↓
Fiber Reconciler & Scheduler (diffing, priorities, time-slicing)
           ↓
Renderer (react-dom, react-native)
           ↓
Host Platform (Browser DOM, Native Views)
