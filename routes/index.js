const express = require('express');
const router = express.Router();

// get home page
router.get('/', function(req,res){
    res.render('index');
});

module.exports = router;