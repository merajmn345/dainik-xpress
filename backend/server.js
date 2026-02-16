const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db_connect = require("./utils/db");

dotenv.config();

const port = process.env.port || 5002;
db_connect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
