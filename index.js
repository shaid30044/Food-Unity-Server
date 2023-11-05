const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food Unity Server");
});

app.listen(port, () => {
  console.log(`Food Unity Server is running on Port ${port}`);
});
