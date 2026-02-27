https://roadmap.sh/postgresql-dba

# MVCC

## Setup PostgreSQL

Use docker, it's cleaner
https://hub.docker.com/_/postgres
docker run --name=db -e POSTGRES_PASSWORD=secret -d -v postgres_data:/var/lib/postgresql postgres:18

sudo pacman -S postgresql
sudo -iu postgres
initdb -D /var/lib/postgres/data # Create database cluster
exit
sudo systemctl start postgresql
sudo systemctl enable postgresql

sudo -iu postgres
psql
CREATE/ALTER USER <user> PASSWORD <password>
CREATE DATABASE <db> OWNER <user>;

psql -U <user> -d <db>
postgres://postgres:laudapswd@localhost:5432/dvdrental

<!-- We perform task on user & database: -->
<!---->
<!-- ```plaintext -->
<!-- OS (Linux) -->
<!--  └── user: postgres -->
<!--        └── PostgreSQL Server -->
<!--              └── role: postgres -->
<!--                    └── databases, tables, data -->
<!-- ``` -->

## User Command

\du - All users/roles
`SELECT CURRENT * USER;`
`SET ROLE <scope>*<purpose>; RESET ROLE;`

## Database Command

\l - All databases

---

https://neon.com/postgresql/tutorial
Q: Supabase vs Neon
Q: Role vs User

# What is PostgreSQL?

The goal of the POSTGRES project to add the minimal features needed to support multiple data types
The POSTGRES project was renamed to PostgreSQL to clearly illustrate its support for SQL in 1996

## Common Use Cases of PostgreSQL

## PostgreSQL features

## Load Database

https://www.postgresql.org/ftp/projects/pgFoundry/dbsamples/pagila/pagila/
![](https://neon.com/postgresqltutorial/printable-postgresql-sample-database-diagram.pdf)

# To Know

The asterisk (\*) which appears in front of the field, indicates the primary key
