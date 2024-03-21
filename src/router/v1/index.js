const express = require('express');

const airplaneRoutes = require('./airplane-route');


const router = express.Router();


router.use('/airplanes', airplaneRoutes);


router.get('/info', (req, res) => {
    return res.json({msg:'info'});
}
)

module.exports = router;
