const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv/config")


app.use(express.json());

//Import routes
const urlRouter = require("./routers/url")


//Middlewares
//router middleware
app.use("/api/url", urlRouter)


//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB"))

//starts the server
app.listen(3000, () => console.log("Server is running!"));