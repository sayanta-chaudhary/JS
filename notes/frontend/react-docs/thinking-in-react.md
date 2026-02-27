You will first break it apart into pieces called components
Then, you will describe the different visual states for each of your components
Finally, you will connect components together so that the data flows through them

<!-- Describe how each component looks in different states -->
<!-- Connect components with data flowing through them -->

<!-- Break the ui into components 🧩 -->
<!---->
<!-- - First break it apart into pieces called components -->
<!--   Define visual states for each component 🎨 -->
<!-- - Then, you will describe the different visual states for each of your components -->

# - Define how each component should look in different situations

# by identifying all possible visual states (e.g., loading, error, success, empty)

Connect components & manage data flow 🔄

- Finally, you will connect your components together so that the data flows through them

<!-- # https://react.dev/images/docs/s_thinking-in-react_ui_outline.png -->

---

Step 1: Break the ui into components

- Follow The Single-Responsibility Principle
  A component should ideally only do one thing
  if it ends up growing, it should be decomposed into smaller subcomponents

CSS—consider what you would make class selectors for (However, components are a bit less granular):
Think of it like structuring CSS classes:

# - in CSS, you create class selectors for reusable styles (e.g., .button, .card, .navbar)

# - in React, you create components for reusable ui parts (e.g., <Button />, <Card />, <Navbar />)

if your JSON is well-structured, you’ll often find that it naturally maps to the component structure of your ui

- That’s because ui and data models often have the same information architecture—that is, the same shape
- Separate your ui into components, where each component matches one piece of your data model

Separate your ui into components, where each component matches one piece of your data model:
 FilterableProductTable - contains the entire app
 SearchBar - receives the user input
 ProductTable - displays and filters the list according to the user input
 ProductCategoryRow - displays a heading for each category
 ProductRow - displays a row for each product

Step 2: Build a static version

- Now that you have your component hierarchy, it’s time to implement your app
  The most straightforward approach is to "build a version that renders the ui from your data model" without adding any interactivity… yet!
  ? To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props
  Props are a way of passing data from parent to child
   if you’re familiar with the concept of state, don’t use state at all to build this static version
  State is reserved only for interactivity, that is data that changes over time. Since this is a static version of the app, you don’t need it
- It’s usually easier to build top-down, and on larger projects, it’s easier to build bottom-up
- The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop
  This is called one-way data flow because the data flows down from the top-level component to the ones at the bottom of the tree

Step 3: Find the minimal but complete representation of ui state

- To make the ui interactive "you need to let users change your underlying data model" You will use state for this
   Think of state as the minimal set of changing data that your app needs to remember
  The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself)
- For example, if you’re building a shopping list, you can store the items as an array in state
  if you want to also display the number of items in the list,
  don’t store the number of items as another state value—instead, read the length of your array

List all the pieces of data:
Know what isn’t state?

- Does it remain unchanged over time? if so, it isn’t state
- Is it passed in from a parent via props? if so, it isn’t state
- Can you compute it based on existing state or props in your component? if so, it definitely isn’t state!
  Then identify the state:
   The search text seems to be state since it "changes over time" and "can’t be computed from anything"
  - State is just the data that changes over time 👍
  - Store only what’s necessary, compute values when needed # don't make redundant state

There are two types of “model” data in React:

- Props are like arguments you pass to a function
- State is like a component’s memory
- Props and state are different, but they work together
  A parent component will often keep some information in state (so that it can change it)
  and pass it down to child components as their props

Step 4: identify where your state should live
 After identifying your app’s minimal state data, you need to identify which component is responsible for
changing this state, or owns the state. Remember: React uses one-way data flow, passing data down the
component hierarchy from parent to child component

- It may not be immediately clear which component should own what state
  Figure it out by following these steps!

1. Identify every component that renders something based on that state 👍
2. Find their closest common parent component—a component above them all in the hierarchy
3. Decide where the state should live:
   - Often, you can put the state directly into their common parent
   - You can also put the state into some component above their common parent
   - if you can’t find a component where it makes sense to own the state
     create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component

? identify components that use state:
ProductTable needs to filter the product list based on that state (search text and checkbox value)
SearchBar needs to display that state (search text and checkbox value)

Step 5: Add inverse data flow - child component updates the state of its parent

- Currently your app renders correctly with props and state flowing down the hierarchy
  But to change the state according to user input, you will need to support data flowing the other way
- React makes this data flow explicit, but it requires a little more typing than two-way data binding
  So make it whenever the user changes the form inputs, the state updates to reflect those changes

# Vocab

Granular - detailed
Derive - obtain something from

---

📋 The Core Process (From React’s Guide)
Here’s the typical flow described in Thinking in React:

0.  Start with the mockup
1.  Break the ui into components
2.  Build a static version:

- Create the ui from data model without any interactivity. Pass data using props
- The components will only return JSX. Don't use state at all to build static version

3.  Figure out the state
    Decide which data changes over time (e.g., what the user types, checkboxes, filters) and needs to be stored in state, versus what comes from props.

4.  Decide where the state should lives
    You find the right component to own each piece of state, often the closest common parent of components that need it.

5.  Add interactivity
    Finally, connect user actions (typing, clicking) to updates in state so the UI responds.
