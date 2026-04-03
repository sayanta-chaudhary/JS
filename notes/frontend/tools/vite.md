# Development

Serves file faster using native ES Modules (HMR) no bundling requied! ⚡
Modern browsers natively understand import/export
Uses plugins for non-standard syntax (JSX/TSX) & framework-specific features

## Proxy

Forwards /api requests to another origin like backend server
Browser thinks its same server — no CORS issue

Without proxy: `fetch("http://localhost:3000/api/users")`
With Vite proxy: `fetch("/api/users")`

`changeOrigin: true`
Rewrite request Origin/Host values to match the backend's
Makes the request look like it's coming from the backend itself

Origin: http://localhost:5173
Host: http://localhost:5173
  ↓
Origin: http://localhost:3000
Host: localhost: 3000

`rewrite: (path) => path.replace(/^\/api/, "")`

# Production

Bundles the code with Rollup — highly optimized static assets for production
