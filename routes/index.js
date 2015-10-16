var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/dragndrop');
var taskCollection = db.get('tasks');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Drag n Drop' });
// });

router.get('/', function(req, res, next) {
  taskCollection.find({}, function(err, data){
    console.log(data, 'DATAAAAAAA')
    res.render('index', {allCategories: data });
  })

});

module.exports = router;
