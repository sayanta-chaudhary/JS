![](https://web.dev/static/learn/css/layout/image/a-diagram-showing-the-di-4e46d3ae32e54_856.png)
Everything is a box. Boxes can be inline or block-level
Start looking at the websites you visit through the lens of the CSS box model
They also have seemingly arbitrary rules about how they interact
Margin doesn't count as part of the element's size, regardless of the box-sizing

# Gotchas

`box-sizing: border-box` padding / border are separate from the content
Vertical Margin Collapse
Aligning Boxes Horizontally
Centering with Auto-Margins

# Terms

- User agent stylesheet: Browser's default stylesheet
- Generic Boxes: Both <div> & <span> are container elements that
  don't have any affect on the semantic structure of an HTML document
