// Including package and initializations

const express = require("express");
app = express();

// DataBase
products = [];
index = 1;

// Middleware
app.use(express.json());

// Retrieving all user information  
app.get("/products",(req,res)=>{                
    res.json(products);
})

 // Extracting information based on id
app.get("/products/:id",(req,res)=>{            
    const searchProd = products.find(val => val.id == req.params.id);
    if(!searchProd){res.status(404).json({message: "User not found"});}
    res.json(searchProd);

})

// Add new product details
app.post("/products",(req,res)=>{   
    const name = req.body.name || req.body.Name;
    const description = req.body.description || req.body.Desc;
    const price = req.body.price || req.body.Age; 
    const quantity = req.body.quantity || req.body.Quantity || 0; 

  // Check if required fields are present
  if (!name || price == null) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  // Create a new product with a unique ID
  const newProduct = { id: ++index, name, description, price, quantity };
  products.push(newProduct);

  // Send the new product in the response with a 201 Created status
  res.status(201).json(newProduct);

})

// Updates the information of a product based on ID
app.put("/products/:id",(req,res)=>{            
    res.json({
        message: "Put method implemented"
    })
})

// Deletes information of a given product based on id
app.delete("/products/:id",(req,res)=>{
    res.json({
        message : "Delete method implemented"
    })
})



// Starting server at given port
app.listen(3000,console.log("Server Started...."));



