# Module 2: Basic SQL Commands

Welcome to Module 2 of the Basic Programming Course. In this module, we will cover the fundamental SQL commands that are essential for interacting with databases.

## Table of Contents

1. Introduction to SQL
2. Creating Databases and Tables
3. Inserting Data
4. Querying Data
5. Updating Data
6. Deleting Data
7. Summary

## 1. Introduction to SQL

Structured Query Language (SQL) is a standard language for managing and manipulating databases. It allows you to create, read, update, and delete data in a relational database.

## 2. Creating Databases and Tables

### Creating a Database

To create a new database, use the following command:

```sql
CREATE DATABASE database_name;
```

### Creating a Table

To create a new table within a database, use the following command:

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    ...
);
```

## 3. Inserting Data

To insert data into a table, use the `INSERT INTO` statement:

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

## 4. Querying Data

To retrieve data from a table, use the `SELECT` statement:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

## 5. Updating Data

To update existing data in a table, use the `UPDATE` statement:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

## 6. Deleting Data

To delete data from a table, use the `DELETE` statement:

```sql
DELETE FROM table_name
WHERE condition;
```

## 7. Summary

In this module, we covered the basic SQL commands necessary for creating and managing databases and tables, as well as inserting, querying, updating, and deleting data. These commands form the foundation of working with relational databases.

Happy coding!