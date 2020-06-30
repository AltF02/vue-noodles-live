const router = require('express').Router()


router.get('/user', (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.redirect('/auth');
    }
})

router.get('/test', (req, res) => {
    res.send(JSON.stringify({
        "is_niz_gay": true
    }));
})

router.get('/user/avatar', (req, res) => {
    if (req.user) {
        res.send(JSON.stringify({
            url: req.user.avatar
        }));
    } else {
        res.redirect('/auth')
    }
})


module.exports = router;
