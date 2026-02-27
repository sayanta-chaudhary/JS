![](https://raw.githubusercontent.com/eludadev/css-docs/main/assets/css_grid.png)
https://grid.malven.co/
https://cssgridgarden.com/
https://www.joshwcomeau.com/css/interactive-guide-to-grid/
https://learncssgrid.com/

# Grid Container Setup

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; # width
  grid-template-rows: auto 300px auto; # height
  gap: 10px;
}

# Grid item Placement

.item {
  grid-rows/columns: start / end;
  grid-rows/columns: span 2;
  grid-area: row-start / col-start / row-end / col-end
}

# Grid Template Areas

.container {
  grid-template-areas:
  "header header header"
  "content content sidebar"
  "footer footer footer";
}
.header { grid-area: header; }

# Responsive Grid - that adjusts based on available space - no media queries needed!

- grid-template-rows/columns: repeat(auto-fit, minmax(250px, 1fr));
- grid-template-rows/columns: repeat(3, 1fr); # Creates exactly 3 equal rows or columns

# Grid item Alignment

- justify-items: center; # Horizontal alignment of items
- align-items: center; # Vertical alignment of items
- justify-content: space-between; # Alignment of entire grid
- align-content: start; # Alignment of entire grid

# The implicit Grid & Auto-placement

- Controls auto-placement algorithm

# Terms

Explicit: Clearly and directly defined sizes by you (e.g., width, height)
implicit: Sizes determined by the browser based on content or context
