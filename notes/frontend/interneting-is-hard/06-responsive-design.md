https://gist.github.com/bartholomej/8415655
https://imdac.github.io/modules/css/css-rwd-patterns/

Keep base styles outside of the media queries 💡
Media queries should only adjust styles, not repeat everything

# Adjust styles based on viewport size

## Mobile-first

`@media (max-width: 640px) {}`
Apply styles when the screen width is 640px or smaller (phone, tablet)
Always start with the mobile layout

## Desktop-first

`@media (min-width: 1024px) {}`
Apply styles when the screen width is 1024px or larger (desktop, laptop)
Desktop layouts are typically more complex than mobile

# TERMS

Aspect-ratio: The proportional relationship between an element's width / height
Proportional: Corresponding in size or amount to something else
