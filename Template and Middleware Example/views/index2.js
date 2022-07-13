var express = require('express');
var app = express();

app.get('/dynamic_view', function(req, res){
   res.render('first_view', {
      name: "cdac", 
      url:"https://www.cdac.in/index.aspx"
   });
});

app.listen(3000);


app.set('view engine', 'pug');
app.set('views','./views');