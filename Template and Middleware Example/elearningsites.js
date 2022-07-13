var express = require('express');
var app=express()
var router = express.Router();

router.get('/getByBooks', function(req, res){
   res.send('GET route on things.');
});

router.post('/updateBookID', function(req, res){
   res.send('POST route on things.');
});
router.get('/getLibraryAccess', function(req, res){
   res.send('Get the Library access')
});


 router.get('/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});


 
//export this router to use in our index.js
module.exports = router;