https://react.dev/learn/understanding-your-ui-as-a-tree
https://nextjs.org/learn/react-foundations/getting-started-with-react#essential-javascript-for-react

# What?

![](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Flearn%2Fdark%2Flearn-ecosystem.png&w=3840&q=75)

- Rendering strategy
- Routing
- Data fetching

# Tree

https://react.dev/learn/understanding-your-ui-as-a-tree
Trees are a common way to represent the relationship between entities
![](https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Flearn%2Fdark%2Flearn-component-tree.png&w=3840&q=75)

# React core concepts

## Components

https://nextjs.org/learn/react-foundations/building-ui-with-components

## Props

https://nextjs.org/learn/react-foundations/displaying-data-with-props

## State

- Unlike props which are passed to components as the first function parameter
  the state is initiated and stored within a component
- You can pass the state information to children components as props
  but the logic for updating the state should be kept within the component where state was initially created

<!-- - You should not directly manipulate the DOM -->

# Displaying Data with Props

## iterating through lists

```js
<ul>
  {/* Use () over {} */}
  {names.map((name) => (
    <li>{name}</li>
  ))}
</ul>
```

<!--       <ul> -->
<!--         {names.map((name) => ( -->
<!--           <li>{name}</li> -->
<!--         ))} -->
<!--       </ul> -->
<!---->
<!-- why like this in js  -->
<!---->
<!-- not like htis -->
<!---->
<!--       <ul> -->
<!--         {names.map((name) => { -->
<!--           <li>{name}</li> -->
<!--         })} -->
<!--       </ul> -->

# Server & Client Components

https://vercel.com/blog/understanding-react-server-components
https://www.joshwcomeau.com/react/server-components/
https://www.youtube.com/watch?v=g5BGoLyGjY0

Q: Server Side Rendering vs React Server Components?
Q: Differences between Server and Client Components?
Q: Which components should be Client Components?

- RSCs for dynamic data fetching and Client Components for rich interactivity
- Client Components render on both the client and the server
- SSR (Hydration) -> Suspense (Streaming) -> RSC
  The RSC model does not replace SSR or Suspense, but rather it works alongside them
  to provide all parts of your application to your users as they need them
- Streaming Rendering: Provide all parts of your application to your users as they need them
- Server Actions: Provide a way for users to interact with server-side data before JS loads
  Designed to handle tasks like database updates or form submissions
- Fetching data on the server helps to prevent client-side data fetching waterfalls

## Client boundaries - 'use client' directive

## RSCs: Limitations

- All code written for Server Components must be serializable
- You can't use lifecycle hooks, such as useEffect() or state
- Do not support continuous updates, such as through WebSockets

# App Route

Q: How Next.js eases and enhances the RSC implementation through the App Router
https://vercel.com/templates/next.js/app-directory
