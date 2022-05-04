var express = require("express")
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ejs = require("ejs");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));



 mongoose
  .connect(
    "mongodb+srv://Juandiego26:juan6954470@cluster0.q7em7.mongodb.net/EjercicioBlogretryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado con la base de datos");
})
.catch(function (err) {
  console.log(err);
});

app.get("/inicio", function(req, res){
    res.sendFile(__dirname + "/index.html");
})




app.listen(5500);