var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res) {
  var connection = db();
  connection.query("SELECT nm_tipo_embalagem FROM tipo_embalagem", function(error, result){
      res.render('novoproduto', { tipo_embalagem : result });
   
      
  });
});

router.post('/', function(req, res) {
  var connection = db();
  var formproduto = req.body;
  console.log(formproduto);
  connection.query("insert into estoque set ?", formproduto, function(err, result) {
      if(err){
          console.error(err);
      }else{
          console.log(result);
      }
      res. redirect('/');
  });
});
module.exports = router;