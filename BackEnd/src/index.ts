import express, {Request,Response} from "express";
const app = express();

app.get('/', (req,res)=>{
  res.send("Hellow world")
})

app.listen(3333,()=>{console.log("Servidor no ar")});

