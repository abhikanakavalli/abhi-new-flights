const express = require('express');

const v1Route = require('./v1');
const v2Route = require('./v2');


const router = express.Router();

router.use('/v1', v1Route);
router.use('/v2', v2Route);


module.exports = router;