// Including package and initializations

const express = require("express");
app = express();

// DataBase

// Middleware
app.use(express.json());

// Retrieving all user information  
app.get("/products",(req,res)=>{                
    res.json({
        message: "Data retrieved"
    })
})

 // Extracting information based on id
app.get("/products/:id",(req,res)=>{            
    res.json({
        message: req.params.id
    })
})

// Add new product details
app.post("/products",(req,res)=>{               
    res.json({
        Name: "ABC",
        "Description": "Hello",
        "Price" : 10,
        "Quantity": 10,
    })
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



/*products = [
    {
        "Name" : "Srinidhi",
        "Age"  : 20,
        "Desc" : "This is a good",
    },
    {
        "Name" : "Jhu",
        "Age"  : 21,
        "Desc" : "He is a boy",
    },
    {
        "Name" : "Rogu",
        "Age"  : 20,
        "Desc" : "This is a good"
    },
    {
        "Name" : "Abrar",
        "Age"  : 19,
        "Desc" : "He is a girl"
    }
];

product = products.find(p=>p.Age == 21);
console.log(product);*/