import express from "express";

// Load environment variables
import "./loadEnvironment.js";
import allProducts from "./routes/allProducts.js";
import Product from "./routes/Product.js";
import connectDatabase from "./config/MongoCli.js";

const PORT = process.env.PORT || 5050;
const app = express();
connectDatabase();

app.use(express.json());

// Load the /allproducts routes
app.use("/", allProducts);
app.use("/products", Product);


// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send(`Uh oh! An unexpected error occured. ${err}`)
  })

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}, http://localhost:${PORT}`);
});