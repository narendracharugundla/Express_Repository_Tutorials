var express = require('Express');
var app = express();

var elearningUrls = require('./elearningsites.js');
var thingsUels = require('./things.js');

app.get('/first_template', function(req, res){
    res.render('first_view');
 });

//both index.js and things.js should be in same directory
app.use('/cdackolkata', elearningUrls);
app.use('/things', thingsUels);

app.listen(3000);



app.set('view engine', 'pug');
app.set('views','./views');