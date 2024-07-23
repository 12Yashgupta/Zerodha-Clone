const express=require("express");
const mongoose=require("mongoose");
require('dotenv').config();

const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;

const app=express();
const{HoldingModel} =require("./model/HoldingModel");
const{PositionModel}=require("./model/PositionModel");

app.listen(PORT,()=>{
    console.log("App listening on port 3002");
    mongoose.connect(uri);
    console.log("DB connected");
}); 

app.get("/addPosition",async(req,res)=>{
  let TempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];
  
       TempPositions.forEach(async (item)=>{
        let newPosition=new PositionModel({
          product: item.product,
          name:  item.name,
          qty: item.qty,
          avg: item.avg,
          price: item.price,
          net: item.net,
          day: item.day,
          isLoss: item.isLoss, 
        });
       await newPosition.save();
       });
       res.send("Done!");
});