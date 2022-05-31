const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html");
})

app.get("/about",(req,res)=>{
  res.sendFile(__dirname+"/about.html");
})

app.get("/bag",(req,res)=>{
  res.sendFile(__dirname+"/bag.html");
})

app.get("/blog",(req,res)=>{
  res.sendFile(__dirname+"/blog.html");
})

app.get("/contact",(req,res)=>{
  res.sendFile(__dirname+"/contact.html");
})

app.get("/shop",(req,res)=>{
  res.sendFile(__dirname+"/shop.html");
})

app.get("/sproduct",(req,res)=>{
  res.sendFile(__dirname+"/sproduct.html");
})

app.listen(process.env.PORT || 3000,()=>{
  console.log("Server running at port 3000");
})
