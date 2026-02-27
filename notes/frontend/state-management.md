useState
useReducer
Context API
Redux Toolkit
Zustand

what is the benifits of using redux over Zustand


# Context

Correct mental model
No prop drilling
https://react.dev/learn/passing-data-deeply-with-context
Kind of — but only for reading, not managing.

# Redux

## Reducer

A reducer is one of the most important concepts in modern JavaScript, React, Redux, and general computer science.
why reducers are called reducer?
Reducer = a function that reduces multiple updates into a single result.

<!-- The reducer pattern came first; JavaScript’s reduce() was named after it. -->

Reducers are called reducers because they reduce many inputs into one final state.

❌ Reducers do NOT reduce multiple actions into one action.
✔️ Reducers reduce state transitions; All reducers together produce ONE final state object that contains all app data.
Reducers reduce many actions over time into a single global state object.

A reducer is a pure function that takes the current state and an action, and returns a new state.
Reducer = a pure function that takes state + action and returns the next state.
newState = reducer(oldState, action) - That's it

⭐ Reducer has 3 rules:
✔️ 1. Must be a pure function
(no side effects, no console.log, no API calls)
✔️ 2. Must not mutate the old state
(always return a new state object)
✔️ 3. Must return a state based on the given action
(type: "increment", type: "login", etc.)

⭐ Reducer example (pure JavaScript)
function counterReducer(state, action) {
if (action.type === "increment") {
return state + 1;
}
if (action.type === "decrement") {
return state - 1;
}
return state;
}

let state = 0;
state = counterReducer(state, { type: "increment" }); // 1
state = counterReducer(state, { type: "increment" }); // 2
state = counterReducer(state, { type: "decrement" }); // 1

⭐ Reducer in React (useReducer)
const [state, dispatch] = useReducer(reducer, initialState);
You send an action:
dispatch({ type: "increment" });

⭐ Reducer in Redux
Same idea:
store.dispatch({ type: "login" })

⭐ Reducer vs Context vs State
Concept What it does
State (useState) Stores local state
Context Shares data across components
Reducer Controls how state updates happen
Redux Reducers + global store + actions

<!-- give me slangs and some lines that are famouse in redux, like -->
<!-- you should never mutate your state --> is this like in the react's
<!-- changes must be done using function (reducer) -->

deepest details possible
then after know the actual fundamentals, then simplify it
