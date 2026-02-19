const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const db_connect = require("./utils/db");
const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.json());

if (process.env.mode === "production") {
    app.use(cors());
} else {
    app.use(
        cors({
            origin: "http://localhost:5173",
        }),
    );
}
const port = process.env.port || 5002;
db_connect();

app.use("/", require("./routes/authRoutes"));
app.use("/", (req, res) => res.send("Hello world"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
