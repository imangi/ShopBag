const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./src/routes/userRoutes");


const dbConfig = require("./src/config/dbConfig");

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend is running on the port ${PORT}`);
});
