import express from "express"
import productRoutes from "../routers/product.routes.js";
import authRoutes from "../routers/auth.routes.js";


const app = express();
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api", productRoutes);






export default app;