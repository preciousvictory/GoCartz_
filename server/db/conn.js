import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || ""; // url
const client = new MongoClient(connectionString);

let conn;
try {
  // Connect the client to the server	(optional starting in v4.7)
  console.log("connecting...");
  conn = await client.connect();

  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch(e) {
  console.error(e);
}

let db = conn.db("gocartz");

export default db;