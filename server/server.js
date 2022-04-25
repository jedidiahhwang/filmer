const express = require("express");
const cors = require("cors");

require("./mongoose/connect.js");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5005, () => console.log("Server is running on 5005"));