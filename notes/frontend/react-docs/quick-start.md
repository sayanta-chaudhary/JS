# Creating and nesting components

React components are JavaScript functions that return markup
A piece of the user interface that has its own logic and appearance
Can be as small as a button, or as large as an entire page

# Writing markup with JSX

JSX is stricter than HTML. You have to close tags like <br />

## Adding styles

HTML Attribute -> JSX Equivalent
CamelCase for Attributes/Properties: `onClick, borderRadius` instead of `onclick, border-radius`
Boolean Attributes: `<input disabled={true}> or <input disabled />` instead of `<input disabled>`

# Displaying data

JSX lets you put markup into JavaScript
Curly braces let you "escape back" into JS to display

# Conditional rendering

You'll use the same techniques as you use when writing regular JavaScript code

# Rndering lists

You will rely on JS features like `for loop` & the `array map() function` to render lists
Q: Why we need keys?
A: Special attribute that helps React track items when rendering lists in the Virtual DOM

# Responding to events

Do not call the event handler function: you only need to pass it down
React will call your event handler when the user clicks the button

# Updating the screen

Often, you'll want your component to "remember" some information and display it
For example, maybe you want to count the number of times a button is clicked
To do this, add state to your component
if you render the same component multiple times, each will get its own state

# Using Hooks

Q: Why we can only call Hooks at the top level of component?

# Sharing data between components

Often, several components need to reflect the same changing data
Lifting the shared state up to their closest common ancestor
<!-- Pass state & update function as props to child components -->
<!-- Child components use the props instead of their own state -->
