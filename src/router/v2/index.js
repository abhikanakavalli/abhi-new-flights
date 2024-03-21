const express = require('express');

const router = express.Router();

router.get('/info', (req, res) => {
    return res.json({abhi: 'okay'})
} 
)

module.exports = router;