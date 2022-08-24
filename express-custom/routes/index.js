const express = require('express');
const testMiddleware = require('../middlewares/test');
const testMiddleware2 = require('../middlewares/test2');

const router = express.Router();

router.get('/:name', [testMiddleware, testMiddleware2], (request, response) => {
    response.render('index');
})

module.exports = router;