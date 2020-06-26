const router = require('express').Router()

router.get('/user', (req, res) => {
    if (req.user) {
        res.send(req.user)
    } else {
        res.redirect('/auth')
    }
})

module.exports = router;
