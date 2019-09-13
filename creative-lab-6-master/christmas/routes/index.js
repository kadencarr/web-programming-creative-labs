var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ListSchema = mongoose.model('List');
var expressSession = require('express-session');

var users = require('../controllers/user_controller');
console.log("before / Route");
router.get('/', function(req, res) {
    console.log("/ Route");
    //    console.log(req);
    console.log(req.session);
    if (req.session.user) {
        console.log("/ Route if user");
        res.render('christmas-list', {
            username: req.session.username,
            msg: req.session.msg,
            color: req.session.color
        });
    }
    else {
        console.log("/ Route else user");
        req.session.msg = 'Access denied!';
        res.redirect('/login');
    }
});
router.get('/addItem', function(req, res) {
    console.log("/user Route");
    if (req.session.user) {
        res.render('addItem', { msg: req.session.msg });
    }
    else {
        req.session.msg = 'Access denied!';
        res.redirect('/login');
    }
});

router.get('/signup', function(req, res) {
    console.log("/signup Route");
    if (req.session.user) {
        res.redirect('/');
    }
    res.render('signup', { msg: req.session.msg });
});

router.get('/login', function(req, res) {
    console.log("/login Route");
    if (req.session.user) {
        res.redirect('/');
    }
    res.render('login', { msg: req.session.msg });
});
router.get('/logout', function(req, res) {
    console.log("/logout Route");
    req.session.destroy(function() {
        res.redirect('/login');
    });
});

router.get('/confirm-data', function(req, res) {
    console.log("/GET session info");
    console.log(req.session.user);

    res.send(req.session.user);
});

router.post('/addItem/', function(req, res, next) {
    console.log("/POST Beginning Add Item");
    console.log("Request Body: " + req.body);
    
    var listBody = new ListSchema(req.body);
    listBody.save(function(err, listBody) {
        if (err) { return next(err); }
        res.json(listBody);
    });
});

router.get('/getList/', function(req, res, next) {
    ListSchema.find({ Owner: req.session.user }, function(err, userList) {
        if (err) return console.error(err); //If there's an error, print it out
        else {
            console.log(userList);
            res.json(userList);
        }
    })
})


router.post('/signup', users.signup);
router.post('/user/update', users.updateUser);
router.post('/user/delete', users.deleteUser);
router.post('/login', users.login);
router.get('/user/profile', users.getUserProfile);


module.exports = router;
