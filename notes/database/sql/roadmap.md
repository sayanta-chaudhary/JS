https://docs.google.com/document/d/17bBwNzasdAW3c_AMkt2VPYnLCkfzi5E5KuFVGOe9W10/edit?tab=t.0
https://sqlzoo.net/
https://datalemur.com/

# Document-Oriented Databases (NoSQL)
- huMongousDB 💪 (flexible)

# Data Models
- Entity-Relationship (ER) Model (diagrams and relationships)
- Schema Design (for better structured data)

https://youtu.be/pomxJOFVcQs?si=JL_8Sg_G4mXykQrb
# ACID Properties (Transaction Management)
Transferring money between two bank accounts
💲100 - ATM & internet banking 
<!-- Atomicity: all or nothing -->
<!-- Consistency: must meet all constraints -->
<!-- isolation: concurrent transactions to avoid conflicts -->
<!-- - violations, concurrency control, locks and MVCC? -->
<!-- Durability: changes are permanent once completed, even after a crash -->

https://youtu.be/fsG1XaZEa78?si=IevZV8IhN2EVyacB
# indexes - Data structure that speeds up data retrieval, like a book's index # by creating shortcuts
- types of indexes (B-tree, Clustered/Non-Clustered, Bitmap, Hash)
- query optimization # Explain ANALYZE

# Relational-DBMS (Relational Mode):
Database Design
## Normalization 
Reduces redundancy, ensures data consistency, and makes data easy to maintain and update # [De]?
![](https://storage.googleapis.com/algodailyrandomassets/curriculum/databases/Normal%20Forms/normal_forms.png)
2NF - team_project, team_member's name depends only on team_member_ID, not project_ID
- Functional dependency: one column's value depends on another column (often a key)
3NF - A depends on B, and B depends on C, A indirectly depends on C 
- Prevents A from depending on C
- Boyce-Codd Normal Form # the left side of every functional dependency must be a Super-Key

# Types of Relationships # One-to-Many

ORMs (Object-Relational Mapping) Technique/Tool
Object Related Database Management System - Object-Oriented Model
Data Integrity and Security

**Aspect**          |  **DBMS**                                        |  **RDBMS**
**Query Language**  |  NoSQL, Custom query languages                   |  SQL
**Data Storage**    |  Document-based, Key-Value, Graph                |  Table-based (Relational)
**Scalability**     |  Easier to scale horizontally                    |  Vertical scaling (horizontally in some cases)
**Schema**          |  Schema-less (No blueprint)                      |  Structured schema (tables, rows, columns)
**Transactions**    |  Basic management                                |  ACID-compliant
**Keys**            |  Not required                                    |  Primary, Foreign, Candidate Keys
**Normalization**   |  Not required                                    |  1NF, 2NF, 3NF, BCNF
**Data Integrity**  |  Basic constraints                               |  Strong constraints
**Relationships**   |  Limited or no relationships (except graph DBs)  |  Strong relationships between tables (Foreign Keys, JOINs)

# Terms
Query: request for data retrieval
Sharding: splits large data into smaller chunks, stored across multiple machines, improving scalability
- replication
Superkey: any set of attributes that uniquely identifies a row
- candidate-key  any-attribute = superkey

# Vocab
Constraints: rules that ensure data accuracy and consistency
Concurrency: the fact of two or more events or circumstances happening or existing at the same time
Compliant: follows the rules
Compliance: how well the rules are followed

<!-- Hash Tables? -->
