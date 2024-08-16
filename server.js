const express = require("express");
const cors = require("cors");
const {connectDB} = require("./config/db");
const bodyparser = require("body-parser");
require('dotenv').config()
const path = require("path")
const app = express(); 

connectDB();

app.use(cors());
app.use(bodyparser.json());

app.use(express.static,(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() =>{
     console.log(`Server running on port ${PORT}`);
     const {sequelize} = require ("./config/db")
     try {
         await sequelize.sync()
         console.log("Databsse synced" )
     } catch (err) {
         console.error("Error base de datos", err)
         
     }



 
})



