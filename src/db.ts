const { Client } = require("pg");

export const client = new Client({
  user: process.env.user,
  host: "localhost",
  database: "transactions",
  password: "",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to Postgres"))
  .catch((error: Error) => console.error("Connection error", error.stack));
