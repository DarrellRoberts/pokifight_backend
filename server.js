const express = require('express')
const app = express();
const cors = require('cors')
port = 8090;
require("dotenv").config();
const pokemon = require("./routes/pokemon")
const connectDB = require("./dbinit.js");

connectDB();

// usual middleware in order to receive response in json
app.use(express.json());
// cors allows users to connect frontend with backend
app.use(cors());
//allows you to get data from a form
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("Hello sir");
})

app.use("/api", pokemon);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})