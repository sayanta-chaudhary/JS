React Router ≈ Routing only (do one thing and do it well)

# Nested Routes, Layouts

Why layout based routing? 
- Shared ui, Reusable parent, Organised structure
- <Outlet> the spot where a parent route renders its child routes

At /, it renders AppLayout, and the default child route will be <RecordList />
When i go to /edit/:id, /create it renders <Record />

```jsx
{
  path: "/", element: <AppLayout />, // Layout Routers
  children: [
    // Use relative path in nested routes
    { index: true, element: <RecordList /> }, // Make this child route the default route of parent /
    { path: "edit/:id", element: <Record /> },
  ],
}

```

What if i don’t want the Header/Footer on some routes?
- Create diff layout (with or without Header/Footer) & place routes inside the layout they belong to

```plaintext
AppLayout (Header/Footer)
 └── /         → RecordList
PlainLayout (No Header/Footer)
 ├── /create   → Record
 └── /edit/:id → Record
```

What i should put into my App.jsx?
- With React Router App.jsx is typically only used for global providers

What React Router routing really is?
- Match URL → Select parent layout → Render child route inside <Outlet>
- Flow: RouterProvider → Router → Layouts → Pages → Components

```plaintext
RouterProvider (main.jsx)
 └── createBrowserRouter (routes)
      └── Layout (renders <Outlet>) <Outlet> inside AppLayout where the children render
           └── Page (child route)
                └── Components (ui pieces)
OR
          AppLayout
           └── <Outlet>
                 ├── "/"           → RecordList
                 ├── "/update/:id" → Record (update)
                 └── "/create"     → Record (create)
```

What does `layout route` without `path` do?
- it doesn't change the URL segment, it just shows the child routes
- You visit the child routes directly, not the layout

```jsx
{
  element: <AuthLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ],
}
```

# Dynamic routes

Get the value from the URL (dynamic segment) `useParams()`
Get data from the query string `useSearchParams()`
Fetch data based on the value with `axios / fetch`

## Navigation

We don't use <a> because it reloads the whole page
<Link> — Navigate without reload
<NavLink> — Same as <Link>, plus it gives an `active` class for styling
<Navigate> navigate()

Protected Routes — Create a ProtectedRoute component
<ScrollRestoration> — Place inside a layout, right above <Outlet>
Error Boundaries
Code splitting / Suspense / Lazy Loading

Don't use Loaders/Actions in client-side app — use Axios or React Query for data fetching/mutations
Loader ≈ (Read) — Fetches data before rendering the route
Action ≈ (Create, Update, Delete) — Handles data mutations before rendering
