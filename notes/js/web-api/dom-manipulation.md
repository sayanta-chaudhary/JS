https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting

# What is the DOM?

- The DOM is an object representation of the HTML elements
- DOM nodes exist relative to each other in the tree — root, parent, child, sibling, and descendant
- You can use DOM methods to listen to user events and manipulate the DOM by
  selecting, creating, updating, and deleting elements in the user interface

## Odin Project

- When your HTML code is parsed by a web browser, it is converted to the DOM
  One of the primary differences is that these nodes are JS objects that have many properties & methods attached to them
- Keep in mind that the JavaScript does not change your HTML file, but the DOM
  your HTML file will look the same, JavaScript changes what the browser renders

Q: Why does the browser convert HTML into the DOM?
Q: What exactly updates when the DOM is manipulated?
Q: textContent vs innerHTML?

## Traversing the DOM

- `getElementsBy*` - limited to tag, class or id (use only for auto-updating live collections)
- `querySelector("#id")` - CSS selectors .class, div, [attr]
  You can also use relational selectors (firstElementChild or lastElementChild)
  So you can identify certain node based on its relationships to the nodes around it

<!-- - el.getAttribute("data-user") -->
<!-- - el.setAttribute("data-role", "admin") - Overwrites existing values, so use carefully -->

# Lifecycle of DOM Manipulation

- Create element `const el = document.createElement("h1")`
- Set content, attributes, properties, classes, styles
  `el.textContent, el.setAttribute("src", "img.jpg"), el.classList, el.style`
- Add event listeners `el.addEventListener("click", () => {}) / el.removeEventListener("click", {})`
- Select element to attach `document.body or document.querySelector("#container")`
- Attach to the DOM `container.append(el)` prepend(), before(), after(), append()
- Element appears on the page (DOM is updated)

```js
const parentDiv = document.createElement("div");
parentDiv.classList.add("parent");

const childDiv = document.createElement("div");
childDiv.classList.add("child");
childDiv.textContent = "i'm inside parent div";

parentDiv.append(childDiv); // Append child inside parent
document.body.append(parentDiv); // Append parent to body
```

# Terms

Node: Everything in the DOM: elements, text, comments, attributes even the DOCTYPE declaration
`document.querySelectorAll("p")` // All matching elements (NodeList)
Element: Only actual HTML tags: <html> <head> <title> <body> <h1> <div> <p>
`document.querySelector("h1")` // First matching element

```js
const container = document.createElement("div");
container.classList.add("content");
container.textContent = "wake up, Neo!";
document.body.append(container);

const h1 = document.createElement("h1");
h1.textContent = "hey i'm blue!";
h1.style.color = "blue";
container.append(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
container.append(p);
```
