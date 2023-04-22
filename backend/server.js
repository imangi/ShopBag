const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const dbConfig = require("./src/config/dbConfig");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend is running on the port ${PORT}`);
});
