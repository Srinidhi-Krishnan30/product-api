# Product API

A simple product API built with Node.js and Express that allows you to create, retrieve, update, delete, and sort products.

## Features
- **Create a product**: Add a new product with attributes like name, description, price, and quantity.
- **Retrieve products**: View all products or a single product by ID.
- **Update a product**: Modify the details of an existing product.
- **Delete a product**: Remove a product by ID.
- **Sort products**: Sort products by price or name.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Srinidhi-Krishnan30/product-api
2. Navigate to the project directory:
    cd your-repo-name
3. Perform basic setup:
    npm init
    npm install express
4. Start the server
    node index.js

The server will start on http://localhost:3000.

### API Endpoints

| Method | Endpoint                   | Description                               |
|--------|-----------------------------|-------------------------------------------|
| GET    | `/products`                | Retrieve all products                     |
| GET    | `/products/:id`            | Retrieve a single product by ID           |
| POST   | `/products`                | Create a new product                      |
| PUT    | `/products/:id`            | Update an existing product by ID          |
| DELETE | `/products/:id`            | Delete a product by ID                    |
| GET    | `/products-sort?sortBy=price` | Sort products by price |


### Testing with Postman

#### GET /products
![Get Screenshot](postmanWindow\get.png)
This command retrieves all the products available in the database

#### POST/products
![Post screenshot](postmanWindow\post.png)
This command adds a new product to the database
Sample Body Format:
    {
    "Name": "Example Product",
    "Desc": "Example Description",
    "Price": 100,
    "Quantity": 10
}




