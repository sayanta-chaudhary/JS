<!-- - JSX is just syntatic sugar for function calls & object construction -->
<!-- - Api Response: The rule of thumb is to never return plaintext -->

useRef: is like a sticky note on your desk
- You jot something down and refer back to it anytime
  it stays the same through updates and doesn't cause re-render
- Holds value that persists across renders (like a variable that doesn't reset)
  Does not trigger re-renders when the value changes. Provides direct access to DOM nodes

<!-- useEffect: Do this after rendering is done -->
<!-- Purpose: Manage side effects in components (code that runs outside of rendering) -->
<!-- By default, it runs after every component render, unless you control it with the dependency array -->

When you use setState, you can also access the current value 💡
- setState((prev) => ...) - React gives you the latest state value
- Use this when your update depends on the previous state

<!-- - returns true if the value or type is different, otherwise false -->
<!--   person.id !== existingPerson.id ? person : returnedPerson, -->

<!-- - keep only the persons whose id is not equal to updatedPerson.id -->
<!--   setPersons(persons.filter((p) => p.id !== updatedPerson.id)); -->

# Pending ----------------------------------------------------------------------
When do i need "return" in functions and when not?
when it's async we don't use return, when it's sync we use return is this correct?

State as a Snapshot?
- Used to update state based on its previous value (e.g., counter)

Reconciliation: You only change the words you edited without rewriting the entire document (Efficient)
- Think of the Virtual DOM like a spot-the-difference game between two pictures (before and after)
- React plays the game, finds the differences, and only redraws the changed parts
Reconciliation > Comparison > Diffing > Update DOM only what's changed instead of re-rendering everything

# Terms
Derived state: State that can be computed from other state or props
Business logic: The rules that define how your application works / what it should do
