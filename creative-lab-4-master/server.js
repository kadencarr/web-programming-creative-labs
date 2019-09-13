var express = require('express');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// global $;

var app = express();

// From Express
var routes = require('./routes/index');
app.use('/', routes);
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var dictionary = {};

var dataWords = fs.readFileSync('words.txt', 'utf-8');
var wordSet = dataWords.split("\n");

var dataNames = fs.readFileSync('names.txt', 'utf-8');
var nameSet = dataNames.split("\n");

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 8080, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));


// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects


var clients = [];

io.sockets.on('connection',
  // We are given a websocket object in our function
  function(socket) {

    console.log("We have a new client: " + socket.id);
    // Give them a user name:
    clients.push(socket.id);
    var index = Math.floor(Math.random() * (nameSet.length));
    var assignedName = nameSet[index];
    var id = socket.id;

    dictionary[id] = assignedName;
    console.log("Name given to new user: " + assignedName);

    io.sockets.to(id).emit("name", assignedName);

    console.log(clients);
    console.log(dictionary);

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        //console.log("Received: 'mouse' " + data.x + " " + data.y);

        // Send it to all other clients
        socket.broadcast.emit('mouse', data);

        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );

    //send out new color to all clients 
    // socket.on('colorUpdate', function(receivedColor) {
    //   console.log("Received new color: " + receivedColor);
    //   socket.broadcast.emit('colorUpdate', receivedColor);
    // });

    // socket.on('clearCanvas', function(){
    //   socket.broadcast.emit('clearCanvas');
    // });

    socket.on('disconnect', function() {
      console.log("Client has disconnected: " + socket.id);
      var index = clients.indexOf(socket.id);
      clients.splice(index, 1);
      delete dictionary[socket.id];
      console.log(clients);
      console.log(dictionary);
    });
  }
);


// Set up server timer for resetting games
updateGameplay();
setInterval(updateGameplay, 30000);

function updateGameplay() {

  console.log("Resetting Gameplay!!")

  // Clear canvas, select new user, give draw permissions, clear message board, Keep scores
  // Pick new word

  // Clear Canvas
  io.sockets.emit("clearCanvas");

  // Select new user, Pick new word
  var index = Math.floor(Math.random() * (clients.length - 1));
  console.log("Index: " + index);
  var connectionOfSelectedUser = clients[index];
  console.log("ID of next user: " + connectionOfSelectedUser);
  console.log("This user drawing is: " + dictionary[connectionOfSelectedUser]);

  var word = wordSet[Math.floor(Math.random() * (wordSet.length))];
  console.log("Next word: " + word);

  io.sockets.emit("word", word);
  // Clear message board
  io.sockets.emit("role", "guesser");

  io.sockets.to(connectionOfSelectedUser).emit("role", "drawer");

}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
