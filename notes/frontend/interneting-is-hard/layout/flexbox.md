https://yoksel.github.io/flex-cheatsheet/
https://flexboxfroggy.com

<!-- Row -- -->
<!-- l justify-content - main (horizontal) -->
<!-- u align-items - cross (vertical) -->
<!---->
<!-- Column | -->
<!-- u justify-content - main (vertical) -->
<!-- l align-items - cross (horizontal) -->

# The flex container

- Manipulating items through their parent containers
- Configure the container, then the items
- Nested <div> elements in flexbox group items, providing better control over layout and alignment

`flex-flow` Shorthand property for flex-direction & flex-wrap
`order` to customize the order of individual elements ⚠️
`align-self` to align individual item
`align-content`: unlocked on flex-wrap: wrap

- Only works when items wrap to multiple lines
- Aligns the entire group of flex lines on the cross axis

# Flex: 0 1 auto

- flex-grow: 1; # can grow if there's more room
- flex-shrink: 1; # can shrink if there's less room
- flex-basis: 0; # the base size of the item
  Use `flex-basis` over width (or height) when using flexbox
  because it always targets the main axis regardless of direction
