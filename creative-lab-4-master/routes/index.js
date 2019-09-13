var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/json'});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("In main route");
    res.sendFile('main.html', { root: 'public' });
});


var guesses = [{
        username: 'better_than_you',
        guess: 'bird'
    },
    {
        username: 'real_name_hidden',
        guess: 'plane'
    },
    {
        username: 'fedora_the_explorer',
        guess: 'superman'
    },
    {
        username: 'pluralizes_everythings',
        guess: 'supermanman'
    },
];

router.get('/getguesses', function(req, res) {
    // console.log("In getguesses Route");
    // console.log(guesses);
    res.send(guesses);
});

router.get('/clearguesses', function(req, res) {
    console.log("In clearguesses Route");
    guesses = [];
    console.log(guesses);
    res.send(guesses);
});

router.post('/getguesses', jsonParser, function(req, res) {
    console.log("In getguesses Post");
    console.log(req.body);
    guesses.reverse();
    guesses.push(req.body);
    guesses.reverse();
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;