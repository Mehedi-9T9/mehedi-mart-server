const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000

require('dotenv').config()

const app = express()

//middlewara
app.use(express.json())
app.use(cors())

//database
// console.log(process.env.URI);
const mongoose = require('mongoose');
mongoose.connect(process.env.URI)
    .then(() => console.log(`database connect successfull`))
    .catch((error) => console.log(error))

//routes
app.get("/", (req, res) => {
    res.send("mehedi mart server is running")
})

//running Port
app.listen(port, () => {
    console.log(`The server in running port: ${port}`);
})