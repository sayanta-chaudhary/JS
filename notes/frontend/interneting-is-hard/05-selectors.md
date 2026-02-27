https://webplatform.github.io/docs/css/selectors/
![](https://github.com/eludadev/css-docs/blob/main/assets/css_selectors.png?raw=true)
![](https://vsdentalcollege.edu.in/static/media/css.1a50a159.pdf)
https://flukeout.github.io
https://css-speedrun.netlify.app

Modifying Class Styles: We can apply multiple classes to the same HTML element
Shared Styles & Specific Styles

# Combinators (Relationship Selectors)

- Descendant Selector: Selects all elements that are inside of another element
- Child Selector: Selects only elements that are direct children of other elements
- Adjacent Sibling: Selects all B elements that directly follow A
- General Sibling

# Pseudo-classes

Let you apply CSS based on state changes
Class selectors are by far the most versatile and come with the least amount of drawbacks

## User Action - :hover, :active, :focus

## Structural

- :first-child, :only-child, :nth-child(n), :last-child
- :first-of-type: Selects specific element based on its tag ⚠️
  only operate inside their parent element

## Functional - :not(), :is(), :where(), :has()

## Form / input-state - :enabled, :disabled, :checked, :invalid

# Pseudo-element: Style a specific part of the selected element

- ::before ::after ::selection ::first-line/letter)

# Attribute Selectors

- Data attribute selectors

# Specificity Hierarchy or Wars

- inline > id > classes / attributes / pseudo-classes > elements / pseudo-elements
- "Order Matters" concept only works when all your rules have the same specificity

# Terms

Fragments are how you point the user to a specific part of a web page
Synopsis: A brief summary or general survey of something
