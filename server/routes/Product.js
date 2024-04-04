import express from "express";
import db from "../db/conn.js";
import PRODUCTS from "../data/products.js";

const router = express.Router();

// // Get a single post
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("posts");
//   let query = {_id: ObjectId(req.params.id)};
//   let result = await collection.findOne(query);
//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

//Get by ID Method
// router.get('/:id', (req, res) => {
//   res.send(req.params.id);
// })
router.get('/:id', (req, res) => {
  const singleProduct = PRODUCTS.find((p) => p.id === req.params.id);
  // res.json(singleProduct);
  res.send(singleProduct);
})

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("products");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;