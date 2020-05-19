const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")


app.use(express.json());
app.use(cors())

//Import routes
const urlRouter = require("./routers/url")


//Middlewares
//router middleware
app.use("/api/url", urlRouter)


//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log("Connected to DB"))

//starts the server
app.listen(process.env.PORT, () => console.log("Server is running!"));