var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile('D:\\Code\\js\\views\\index.html')
});

module.exports = router;
