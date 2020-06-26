const router = require('express').Router()

function isAuthorized(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
}
router.get('/yeet', isAuthorized, (req, res) => {
    res.send(200)
})

module.exports = router;
