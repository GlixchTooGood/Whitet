const express = require("express");
const app = express();
const apiRouter = require("./router/api");
const htmlRouter = require("./router/html");
app.use(apiRouter);
app.use(htmlRouter);
app.engine('html', require('ejs').renderFile);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
const port = 443;
const host = '0.0.0.0';
app.listen(port,host,()=>{
    console.log(`Server up on host:${host} on port:${port}`)
})