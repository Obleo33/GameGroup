var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/games', controller.searchGames)
router.get('/thing', controller.getSearchGames)

module.exports = router;
