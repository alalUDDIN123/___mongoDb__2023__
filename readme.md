# Learn MongoDB

MongoDB is a popular NoSQL database that offers flexibility and scalability for handling large volumes of data. This guide will walk you through the basics of MongoDB, from understanding what it is to setting it up and using it via a terminal.

## Table of Contents

1. [What is MongoDB](#1-what-is-mongodb)
2. [Setting Up MongoDB](#2-setting-up-mongodb)
   - [Install MongoDB and MongoDB Tools](#21-install-mongodb-and-mongodb-tools)
   - [Setting Environment Variables](#22-setting-environment-variables)
   - [Start MongoDB Server](#23-start-mongodb-server)
3. [Using MongoDB with Any Terminal](#3-using-mongodb-with-any-terminal)
4. [Commands and Explanations for MongoDB Database Tools](#4-commands-and-explanations-for-mongodb-database-tools)
   - [Import JSON Data to MongoDB Database](#41-import-json-data-to-mongodb-database)
   - [Export Data from MongoDB to Local Machine](#42-export-data-from-mongodb-to-local-machine)
5. [Comparison Operators in MongoDB](#5-comparison-operators-in-mongodb)
6. [Cursor Methods in MongoDB](#6-cursor-methods-in-mongodb)
7. [Logical Operators in MongoDB](#7-logical-operators-in-mongodb)
8. [Complex Expressions](#8-complex-expressions-in-mongodb)
9. [Projection in MongoDb](#9-projection-in-mongodb)

---

## 1. What is MongoDB

MongoDB is a NoSQL (Not Only SQL) database known for its flexibility and scalability. Unlike traditional relational databases, MongoDB stores data in BSON (Binary JSON) format, enabling the storage of unstructured data and providing powerful querying capabilities.

Key features of MongoDB include:

- **Document-Oriented:** MongoDB stores data in JSON-like documents, making it easy to work with data in a way that resembles most programming languages.

- **Schemaless:** MongoDB doesn't require a predefined schema, allowing you to insert documents with different structures into the same collection.

- **Scalability:** MongoDB can scale horizontally by distributing data across multiple servers, making it suitable for handling large volumes of data.

- **Querying:** MongoDB provides a powerful query language that allows you to perform complex queries on your data.

## 2. Setting Up MongoDB

### 2.1. Install MongoDB and MongoDB Tools

To get started with MongoDB, you'll need to install MongoDB and MongoDB Tools. Follow these steps:

1. **MongoDB:** Download MongoDB from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community) and follow the installation instructions for your operating system.

2. **MongoDB Tools:** For importing and exporting large amounts of JSON data, download MongoDB Tools from [https://www.mongodb.com/try/download/database-tools](https://www.mongodb.com/try/download/database-tools).

### 2.2. Setting Environment Variables

To ensure that your system recognizes MongoDB and MongoDB Tools, follow these steps:

1. Locate the MongoDB installation directory. Typically, it can be found in `C:\Program Files`. Inside the MongoDB folder, you'll see subfolders named `Server` and `Tools`. Click on the appropriate subfolder until you find the `bin` directory.

2. Open the Environment Variables settings on your system. You can usually find this by searching for "Environment Variables" in your system's search bar.

3. In the Environment Variables window, find the "Path" variable in the "System Variables" section, select it, and click "Edit."

4. Add the path to the `bin` directory of your MongoDB installation (e.g., `C:\Program Files\MongoDB\Server\7.0\bin`) to the list of paths. Click "OK" to save the changes.

### 2.3. Start MongoDB Server

After installation, start the MongoDB server by opening your terminal and running the following command:

```bash
mongosh
```

You are now connected to your MongoDB server and can start working with your databases and collections.

## 3. Using MongoDB with Any Terminal

MongoDB can be used with any terminal or command prompt. Here are some common operations you can perform:

- **Create a Database:** To create a new database, use the `use` command followed by the database name.

    ```bash
    use mydb
    ```

- **Create a Collection:** Collections are where you store your data in MongoDB. You can create a collection using the `db.createCollection()` method.

    ```javascript
    db.createCollection("mycollection")
    ```

- **Insert Data:** You can insert data into a collection using the `db.collection.insertOne()` method.

    ```javascript
    db.mycollection.insertOne({ name: "John", age: 30 })
    ```

- **Query Data:** Use the `db.collection.find()` method to query data from a collection.

    ```javascript
    db.mycollection.find({ name: "John" })
    ```

- **Update Data:** To update documents, use the `db.collection.updateOne()` or `db.collection.updateMany()` method.

    ```javascript
    db.mycollection.updateOne({ name: "John" }, { $set: { age: 31 } })
    ```

- **Delete Data:** You can delete documents using the `db.collection.deleteOne()` or `db.collection.deleteMany()` method.

    ```javascript
    db.mycollection.deleteOne({ name: "John" })
    ```

## 4. Commands and Explanations for MongoDB Database Tools

### 4.1. Import JSON Data to MongoDB Database

To import JSON data to your MongoDB database, use the following command:

```bash
mongoimport folder_name\File_name -d database_name -c collection_name --jsonArray
```

- **Explanation:**
  - `mongoimport`: Command for importing data from your local machine to MongoDB.
  - `folder_name`: The location of your data.
  - `File_name`: The name of the file containing JSON data.
  - `-d`: Specifies the database name.
  - `-c`: Specifies the collection name.
  - `--jsonArray`: Use this flag if your JSON data contains an array of objects.

**Example:**

```bash
mongoimport E:\alal_uddin_\_me_\mongodb\thapa_json_data\sales.json -d shop -c sales --jsonArray
```

### 4.2. Export Data from MongoDB to Local Machine

To export data from MongoDB to your local machine, use the following command:

```bash
mongoexport -d database_name -c collection_name -o where_to_export\name_of_file
```

- **Explanation:**
  - `mongoexport`: Command for exporting data from MongoDB to your local machine.
  - `-d`: Specifies the database name.
  - `-c`: Specifies the collection name.
  - `-o`: Specifies the output location and file name.

**Example:**

```bash
mongoexport -d shop -c sales -o E:\alal_uddin_\_me_\mongodb\thapa_json_data\salestest.json
```

## 5. Comparison Operators in MongoDB

MongoDB provides various comparison operators to query data in different ways. Here is a list of commonly used operators:

- **$eq (Equal):** Finds documents where a field is equal to a specified value.

   ```javascript
   db.users.find({ name: { $eq: "alal" } })
   ```

- **$ne (Not Equal):** Finds documents where a field is not equal to a specified value.

   ```javascript
   db.users.find({ name: { $ne: "alal" } })
   ```

- **$gt (Greater Than):** Finds documents where a field is greater than a specified value.

   ```javascript
   db.users.find({ age: { $gt: 20 } })
   ```

- **$gte (Greater Than or Equal):** Finds documents where a field is greater than or equal to a specified value.

   ```javascript
   db.users.find({ age: { $gte: 20 } })
   ```

- **$lt (Less Than):** Finds documents where a field is less than a specified value.

   ```javascript
   db.users.find({ age: { $lt: 20 } })
   ```

- **$lte (Less Than or Equal):** Finds documents where a field is less than or equal to a specified value.

   ```javascript
   db.users.find({ age: { $lte: 20 } })
   ```

- **$in (Includes):** Finds documents where a field includes any of the specified values in an array.

   ```javascript
   db.users.find({ age: { $in: [20, 26] } })
   ```

- **$nin (Not Includes):** Finds documents where a field does not include any of the specified values in an array.

   ```javascript
   db.users.find({ age: { $nin: [20, 26] } })
   ```

---
---

## 6. Cursor Methods in MongoDB

For high-level optimization and improved performance, especially when dealing with large data retrieval, MongoDB provides the following cursor methods:

- **count():** The `count()` method calculates the total number of documents that match a query. This can be useful for obtaining the count of documents retrieved once a successful query request is made, regardless of the schema.

   ```javascript
   db.products.find().count()
   ```

- **limit():** The `limit()` method is used to retrieve a specified number of documents from a potentially large dataset. This helps in efficiently managing server resources. Without limiting the result set, the server could become overwhelmed, especially when dealing with a large number of simultaneous requests and filters.

   ```javascript
   db.products.find().limit(20)
   ```

- **skip():** The `skip()` method is particularly useful for pagination purposes. It allows you to skip a specified number of documents from the beginning of the result set. This is essential when implementing pagination to display subsets of data.

   ```javascript
   db.products.find().limit(2).skip(2)
   ```

- **sort():** The `sort()` method is used to arrange or filter data in ascending or descending order based on a specified field. It accepts an object with the field name and a sorting order (1 for ascending, -1 for descending).

   ```javascript
   db.products.find().limit(5).sort({ "price": 1 })
   ```

By utilizing these cursor methods, you can optimize your MongoDB queries, improve performance, and efficiently retrieve and manipulate data according to your specific needs.

---
---

## 7. Logical Operators in MongoDB

MongoDB provides several logical operators that allow you to perform complex queries by combining multiple conditions. These operators include `$and`, `$or`, `$not`, and `$nor`.

- **$and:** The `$and` operator performs a logical AND operation on an array of two or more expressions, returning documents that satisfy all the conditions.

   ```javascript
   db.products.find({$and: [{ isFeatured:false },{ price: { $lt: 500 } }]}).limit(5)
   ```

- **$or:** The `$or` operator performs a logical OR operation on an array of two or more expressions, returning documents that satisfy at least one of the conditions.

   ```javascript
   db.products.find({$or: [{ category: "Electronics" }, { category: "Clothing" }]})
   ```

- **$not:** The `$not` operator negates an expression, returning documents that do not match the specified condition.

   ```javascript
   db.products.find({price:{$not:{$eq:100}}}).limit(3)
   ```

- **$nor:** The `$nor` operator performs a logical NOR operation on an array of two or more expressions, returning documents that do not satisfy any of the conditions.

   ```javascript
   db.products.find({$nor: [{ category: "Electronics" },{ category: "Clothing" }] })
   ```

By using these logical operators, you can construct queries that express more complex conditions and retrieve the documents that meet your specific criteria.

This section provides an overview of logical operators in MongoDB, allowing you to perform advanced queries and filter documents based on complex combinations of conditions.

---
Certainly! Here's the section on complex expressions in MongoDB, including the `$expr` operator with syntax and an example:

---

## 8. Complex Expressions in MongoDB

The `$expr` operator allows using aggregation expressions within a query. This is useful when you need to compare fields from the same document in a more complex manner.

### Syntax

```javascript
{ $expr: { operator: [field, value] } }
```
Suppose you want to find documents which targetPrice is greater `quantity + price`.

To find documents where `targetPrice` is greater than `quantity + price`, you can use the `$expr` operator in a MongoDB query. Here's how you can construct the query:

```javascript
db.products.find({$expr: {$gt: [ "$targetPrice",{ $add: ["$quantity", "$price"] }]}})
```

In this query:

- `$expr` is used to enable the use of aggregation expressions within the query.
- `$gt` is the greater-than comparison operator.
- `"targetPrice"` is compared to the result of the addition operation (`$add`) of `"quantity"` and `"price"`.

This query will return documents where the `targetPrice` is greater than the sum of `quantity` and `price`.

**More operators we use**
```
Arithmetic Operators:

$add: Adds two numbers together.
$subtract: Subtracts one number from another.
$multiply: Multiplies two numbers.
$divide: Divides one number by another.
$mod: Calculates the remainder of a division operation.
```

---



## 9. Projection in MongoDb

Projection in MongoDB refers to the process of selecting and shaping the data that you want to retrieve from the database. It allows you to specify which fields should be included or excluded in the query results. This can be especially useful when you only need specific data from a document, rather than retrieving the entire document.

In a MongoDB query, you can use projection to include or exclude specific fields from the result documents. The basic syntax for projection is as follows:

```javascript
db.collection.find(query, projection)
```

- `query`: The query criteria to filter the documents.
- `projection`: An object that specifies which fields to include or exclude.

#### Include Fields

To include specific fields in the query result, you can use the projection object with a value of `1` for the fields you want to include. For example, if you have a collection of `products`, and you want to retrieve only the `name` and `price` fields:

```javascript
db.products.find({}, { name: 1, price: 1 })
```

In this query, only the `name` and `price` fields will be included in the result documents.

#### Exclude Fields

To exclude specific fields from the query result, you can use the projection object with a value of `0` for the fields you want to exclude. For example, if you want to retrieve all fields from the `products` collection except the `description` field:

```javascript
db.products.find({}, { description: 0 })
```

In this query, all fields except `description` will be included in the result documents.

### Nested Fields and Arrays

Projection can also be applied to nested fields and arrays. For example, if you have a document structure like this:

```json
{
   "_id": 1,
   "name": "Product 1",
   "details": {
      "color": "Red",
      "size": "Medium"
   },
   "tags": ["electronics", "gadgets"]
}
```

You can project nested fields like this:

```javascript
db.products.find({}, { "details.color": 1 })
```

And you can project specific elements from an array using the array index:

```javascript
db.products.find({}, { "tags.0": 1 }) // Retrieves the first element of the "tags" array
```

### `_id` Field

By default, MongoDB includes the `_id` field in query results. You can exclude it explicitly if needed:

```javascript
db.products.find({}, { _id: 0 })
```

This will exclude the `_id` field from the result documents.

Projection in MongoDB is a powerful feature that allows you to retrieve only the data you need, making your queries more efficient and reducing unnecessary data transfer.