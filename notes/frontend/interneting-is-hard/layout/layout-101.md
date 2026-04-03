When a designer hands you a mockup to implement, your first task is to draw a bunch of boxes on it
and determine how they’re supposed to stack, stretch, and shrink to achieve the desired design
Once you've got that done, it should be pretty easy to code

The hard part isn't actually writing the HTML and CSS code
it's figuring out, conceptually (on a piece of paper)
the behavior of all the necessary boxes to create a given layout

https://www.joshwcomeau.com/css/understanding-layout-algorithms/ 💡
The key to understanding CSS is realizing that different layout modes
(block, inline, flexbox, grid, absolute positioning)
behave differently, even with the same property declarations

- Changing a layout mode is literally changing the algorithm the browser uses
  Properties like width or percentages act differently based on the active mode
  width percentage might be based on the parent in normal flow, but on a grid cell in a grid layout
- Context is Everything: width can act as an absolute command in one context
  but merely a suggestion in another (e.g., inside Flexbox)
- Mindset Shift: Ask, Which layout algorithm is active here?

# Layout patterns

> Flow first, override when needed

https://youtu.be/i1FeOOhNnwU?si=iu7KuDW_Ju-Tdw8J
https://developer.mozilla.org/en-US/docs/Web/CSS/How_to/Layout_cookbook
https://matthewjamestaylor.com/holy-grail-layout
https://every-layout.dev/

# TERMS

Full-bleed Layout: Content stretches edge-to-edge. No max-width
Fixed-width Layout: Content locked to a set pixel width, centered
Fluid Layout: Content scales with the viewport using % or max-width
