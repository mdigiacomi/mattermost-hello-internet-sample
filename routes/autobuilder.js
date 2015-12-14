var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  request.post({
    headers: {'content-type' : 'application/json'},
    url:     'http://localhost:8065/hooks/esm57b6ybp8diyh8ajdypf6ywh',
    body:    '{"text": "Hello Internet"}'
  }, function (error, response, body) {
    //res.send(error.message);
    console.log(error);
  });
    res.send('DONE!!');
});

router.post('/', function (req, res){

  console.log(req.body);

  try {
    request.post({
      headers: {'content-type' : 'application/json'},
      url:     'http://localhost:8065/hooks/esm57b6ybp8diyh8ajdypf6ywh',
      body:    '{"text": "Hello Internet"}'
    }, function (error, response, body) {
      //console.log(body);
    });
  }
  catch(error){
    //res.send(error.message);
    console.log(error);
  }

  res.send('DONE!!!');
});


module.exports = router;