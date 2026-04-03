![Sectioning Elements](https://static.semrush.com/blog/uploads/media/cc/85/cc85d452a743e27f68d426df35e4da7d/EN-Semantic-Search-Non-Semantic.webp)
https://hoyois.github.io/html5outliner/

- To understand why this is important we really have to empathize with the machines reading our content
- Don't use semantic elements just for the sake of using them
  implementing them incorrectly is worse than not using them at all

<!-- <details> <summary> -->
<!-- <figure> <figcaption> -->
<!-- <dialog> -->

Sectioning elements:

<article>
<aside>
<nav>
<section>

# The Document Outline

Each <h1> element creates a new section in the document outline
Prefer using only one <h1> per page & Do not skip heading levels

## Header 💡

- Best practice to wrap the website's name/logo, search form, and <nav>
- Headers are only associated with the nearest sectioning element

## Article

- <article> element represents self-contained, independent content
- which is intended to be independently distributable or reusable
- <article>'s are essentially mini web pages in your HTML document
- for things like blog posts, newspaper articles

## Section

- The <section> element is sort of like an <article>
- except it doesn't need to make sense outside the context of the document
- Often times, you need a container to wrap a section for layout purposes
- Each <section> element should contain at least one heading

# Divs For Purely Layout / Presentational

- When none of the semantic HTML elements would make sense
- Flexbox requires lots of <div>'s to group flex items correctly

# SEO

https://schema.org/docs/gs.html
https://search.google.com/test/rich-results
