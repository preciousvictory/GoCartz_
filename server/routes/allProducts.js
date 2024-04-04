import express from "express";
import db from "../db/conn.js";
import PRODUCTS from "../data/products.js";

const router = express.Router();

// Get a list of 50 posts
// router.get("/", async (req, res) => {
//     let collection = await db.collection("products");
//     let results = await collection.find({})
//       .limit(50)
//       .toArray();
//     res.send(results).status(200);
// }); 

router.get('/', (req, res) => {
    res.json(PRODUCTS);
  })

router.get('/:id', (req, res) => {
    res.send(req.params.id);
  })

export default router;