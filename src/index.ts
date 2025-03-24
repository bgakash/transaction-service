import express from "express";
import { client } from "./db";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM payments");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
