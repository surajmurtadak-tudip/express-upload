const express = require('express');
const router = require('./routes/homeRoute');
const upRouter = require('./routes/upRoute');
const app = express();

app.use(express.static("public"));
app.use("/",router);
app.use("/",upRouter)

app.listen(8080,()=>console.log("server runnig on port no. 8080"));