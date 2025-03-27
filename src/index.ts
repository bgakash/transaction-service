import express from "express";
import path from "path";
import { readFile } from "fs/promises";
import cors from "cors";
import compression from "compression";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.get("/transactions/:offset", async (req, res) => {
  const offset = req.params.offset;
  try {
    const filePath = path.join(__dirname, "./data/transaction.json");
    const fileContent = await readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    res.json(jsonData.slice(0, offset));
  } catch (err) {
    console.error("Error reading JSON file:", err);
    res.status(500).send("Failed to read JSON file");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
