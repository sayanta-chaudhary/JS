it is isomorphic = it can run in the browser & node.js with the same codebase
on the server it uses the native node.js http module, while on the client it uses XMLHttpRequest

- Auto json parsing (Server > App) no `res.json()`
- Auto req body serialization (App > Server) no `headers: { 'Content-Type': 'application/json' }, body: JSON.stringify()`
- Smart error handling
- intercept/transform req/res
- Supports timeout
- Cancel request
