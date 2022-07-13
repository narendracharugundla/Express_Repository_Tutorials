var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/hello', function(req, res){
    res.send("Hello World!");
 });

 app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

 app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

 
app.listen(3000,function(){
    console.log("Running on 3000 port")
});