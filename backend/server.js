const express = require("express");
const app = express();
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.port || 5002

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
})