var express = require('express');
var app = express();

app.get('/', function(req, res){
   //res.cookie('name', 'narendra').send('cookie set'); //Sets name = express
   res.cookie('cdac', 'cdackolkata', {expire: 360000 + Date.now()}).send('cookie set'); 
});

app.get('/clear_cookie_foo', function(req, res){
   res.clearCookie('cdac');
   res.send('cookie foo cleared');
});

app.listen(3000);