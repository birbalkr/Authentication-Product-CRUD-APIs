import express from "express"

const productRoutes = express.Router();


productRoutes.post("/products")
productRoutes.get("/products")
productRoutes.get("/products/:id")
productRoutes.put("/products/:id")
productRoutes.delete("/products/:id")




export default productRoutes;