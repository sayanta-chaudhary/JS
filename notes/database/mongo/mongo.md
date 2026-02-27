https://www.mongodb.com/resources/products/compatibilities/express

# Mongo

Why Bson instead of Json?

https://learn.mongodb.com/learn/course/mongodb-shell-cheatsheet/main/mongodb-shell-cheatsheet
https://learn.mongodb.com/learn/course/mongodb-sql-cheat-sheet/main/mongodb-sql-cheat-sheet

https://mongoosejs.com/docs/guide.html
Express validation = protect the API
Mongoose schema = protect the Database

Just get the data from `req.body` or `req.params` and use it to perform CRUB operations 💡
Operations in MongoDB happen at three levels: Database → Collection → Document → Field

By default, Mongoose queries return thenables, which are objects with some properties of a Promise
Thenable = modifiable query before execution
You can append the .exec() method to a query to receive a true JavaScript Promise

# Aggregation & Data Analysis

## Joins

When to use References vs Embedded?
Why MongoDB does NOT support Right/Full joins?
- Because it is document-oriented, not relational; it encourages embedding instead of heavy relational joins

left join = $lookup
inner join = $lookup $match

# Streams & Triggers

# Why Mongoose?

Object Data Modeling (ODM) library built on top of the official MongoDB Node.js driver
Elegant MongoDB object modeling tool designed to work in an async environment
Modeling = Design Organize

Schema Design Anti-Patterns

MongoDB is schemaless → without schema, it stores garbage
```
But there is express to handles validation, why do we still need a schema in MongoDB?

There are two different things to validate:

Validating Request Data (User input):
- Done in Express using Zod / Express-Validator
- Reject bad requests before DB operations

Example:
“Name must be at least 3 characters”
“Email must be valid”
“Password cannot be empty”

- Express stops bad request early
- But Express does not control what MongoDB can store

Validating Database Data Structure:
- Done in MongoDB using Mongoose Schema
- Ensures MongoDB only stores valid and consistent data

Example rules:
Field type = String / Number / Boolean
Field required
Default values
Unique constraints

- Protect DB from accidental mistakes
- Protects the database from invalid data
- Keeps data structure consistent forever
- Express alone cannot enforce this

---

Frontend validation is never enough
Because anyone can bypass the frontend using Postman, cURL → send invalid or harmful data directly to the backend
Mongoose adds schema validation at the database layer

Tools like Joi work only on backend, so Postman/curl cannot bypass
So backend validation is always required
```

Validate twice
🔹 Express handles the request logic
🔹 Mongoose enforces data structure and validation
🔹 Frontend validation = for better UX
🔹 Backend validation = for security, correct data (protects your server & data)

By default, Mongoose queries return thenables, which are objects with some properties of a Promise
Thenable = modifiable query before execution
You can append the .exec() method to a query to receive a true JavaScript Promise

## Schema Design Anti-Patterns
https://www.mongodb.com/docs/manual/data-modeling/design-antipatterns/

Why is mongoose async by default?
- Because database operations are slow
