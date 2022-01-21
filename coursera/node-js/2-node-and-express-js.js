const exp = require('constants');
const express = require('express'), http = require('http');

const hostname ='localhost';
const port = 3000;
const morgan = require('morgan');
const app = express();

app.use((req,res,next)=>{
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send(`<html><body><h1> This is an express server </h1></body></html>`)
})
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'))
const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
})