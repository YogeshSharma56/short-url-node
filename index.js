const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRouter')
const URL = require("./models/url");
const path = require ("path")

const app = express();
const PORT = 8000;

//MongoDB Connection
connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

//Set app to use ejs engine and Render Views avaialble under view folder
app.set("view engine", "ejs")
app.set ("views", path.resolve("./views"));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

//Routes 
app.use("/", staticRoute);
app.use("/url", urlRoute);


//Start http express server
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
