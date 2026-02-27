When a designer hands you a mockup to implement, your first task is to draw a bunch of boxes on it
and determine how they’re supposed to stack, stretch, and shrink to achieve the desired design
Once you’ve got that done, it should be pretty easy to code

The hard part isn’t actually writing the HTML and CSS code
it's figuring out, conceptually (on a piece of paper)
the behavior of all the necessary boxes to create a given layout

When a designer hands you a mockup to implement
your first task is to draw a bunch of boxes on it and determine
how they’re supposed to stack, stretch, and shrink to achieve the desired design

![](https://raw.githubusercontent.com/eludadev/css-docs/main/assets/css_flexbox.png)
https://flexbox.malven.co
https://flexboxfroggy.com

Row --
l justify-content - main (horizontal)
u align-items - cross (vertical)

Column |
u justify-content - main (vertical)
l align-items - cross (horizontal)

# The flex container

- Manipulating items through their parent containers
- Configure the container, then the items
- Nested <div> elements in flexbox group items, providing better control over layout and alignment

flex-flow - Shorthand property for flex-direction and flex-wrap

# Flex: 0 1 auto

- flex-grow: 1; # can grow if there's more room
- flex-shrink: 1; # can shrink if there's less room
- flex-basis: 100px; # the starting size of the item, but it's flexible!
  Fixed - width: 100px; # no growing/shrinking allowed

Use `order` to customize the order of individual elements ⚠️
Use `align-self` to align individual item

`align-content`: unlocked on flex-wrap: wrap❓
Only works when we have flex-wrap set to wrap and have items wrapping

- Only works when items wrap to multiple lines
- Aligns the entire group of flex lines on the cross axis

The hard part isn't actually writing the HTML and CSS code
it's figuring out, conceptually (on a piece of paper)
the behavior of all the necessary boxes to create a given layout

# TERMS

Direction = Which way items flow
