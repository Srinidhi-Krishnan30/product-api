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
    const name =req.body.Name;
    const description = req.body.Desc;
    const price = req.body.Price; 
    const quantity =req.body.Quantity || 0; 

    if (!name || price == null) {                           // fields check
    return res.status(400).json({ error: 'Name and price are required' });
    }

    const newProduct = { id: ++index, name, description, price, quantity };
    products.push(newProduct);
    res.status(201).json(newProduct);

})

// Updates the information of a product based on ID
app.put("/products/:id", (req, res) => {            
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id)); // Use findIndex to get the index of the product
    if (productIndex === -1) { // Check if product is found using index
        return res.status(404).json({ error: 'Product not found' });
    }

    const { Name, Desc, Price, Quantity } = req.body;
    const product = products[productIndex];

    // Update the product with new values if they are provided
    if (Name) product.name = Name;               
    if (Desc) product.description = Desc;        
    if (Price != null) product.price = Price;    
    if (Quantity != null) product.quantity = Quantity; 
    res.json(product);  
});


// Deletes information of a given product based on id
app.delete("/products/:id",(req,res)=>{
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.status(204).json({message: "User Removed"});
})


// Starting server at given port
app.listen(3000,console.log("Server Started...."));



