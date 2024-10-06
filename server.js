const express = require("express");
const app = express();
const apiRouter = require("./router/api");
const htmlRouter = require("./router/html");
const path = require('path');
app.use(apiRouter);
app.use(htmlRouter);
app.engine('html', require('ejs').renderFile);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
const port = 9993;
const host = '0.0.0.0';
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})
app.listen(port,host,()=>{
    console.log(`Server up on host:${host} on port:${port}`)
})