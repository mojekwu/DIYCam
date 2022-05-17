const express = require('express');

const router = express.Router();

router.get('/logout', function(req, res) {
    req.logout();
    res.render('/');
});

module.exports = router;