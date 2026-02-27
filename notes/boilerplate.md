https://www.mongodb.com/resources/languages/mern-stack
https://www.mongodb.com/resources/products/compatibilities/express

# Architecture Pattern

Three-Tier Architecture Pattern
Layered Architecture
Feature-based Structure

# Folder Structure

https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md <!-- provider/ -->
https://github.com/nemanjam/mern-boilerplate/tree/master/server/src <!-- validations/ -->
https://github.com/expressjs/express/tree/master/examples/mvc
https://alexkondov.com/tao-of-node/ (Design Philosophy)

Monorepo & Api-First Approach - Architecture style

<!-- ----------------------------------------------------------------------- -->

req → controller → service → model → db → service → controller → res

Controllers = ONLY for handling the route (Single Responsibility Principle)
accept the request
call the service
send the response
nothing else

Services = Business Logic (The Brains)
business logic
validation logic (Zod / Joi)
database operations
JWT decoding
permissions / ownership checks
complex condition checks
transformations
interactions between models

<!-- ----------------------------------------------------------------------- -->

# MERN

An employee database

React
- Router

Mongo
- mongodb — driver that allows Node.js applications to connect to the database and work with data
- Add Schema using mongoose
- Converts BSON to JSON
- returnedObject.id = returnedObject._id.toString();
- Link info who created like
- connect something to the user like note app in the mongo, like the thing this user is created
  or this thing is realted to this user
