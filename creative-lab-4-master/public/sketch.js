var socket;
var role = "guesser";

//var myColor; 

//var myColor = $(".selected").css("backgroundColor");

function changeName(name) {
  console.log("Your username: " + name);
  var appElement = document.querySelector('[ng-app=app]');
  var $scope = angular.element(appElement).scope();
  $scope.$apply(function() {
    console.log("Printing Data");
    console.log(name);
    $scope.currentUsername = name;
  });
}


function changeWord(word) {
  var appElement = document.querySelector('[ng-app=app]');
  var $scope = angular.element(appElement).scope();
  $scope.$apply(function() {
    $scope.currentWord = word;
  });
}

function changeRole(role) {
  var appElement = document.querySelector('[ng-app=app]');
  var $scope = angular.element(appElement).scope();
  $scope.$apply(function() {
    $scope.role = role;
  });
}


function setup() {
  var canvas = createCanvas(640, 380);
  canvas.parent('canvas');
  background('white');

  socket = io.connect('http://18.191.179.203:8080/');
  // mycolor = color(255,255,255);
  //var canvas = createCanvas(640, 380);

  socket.on("name", function(data) {
    console.log("Recieved a username!");
    changeName(data);
  });

  socket.on("word", function(data) {
    console.log("Recieved a word!");
    changeWord(data);
  });

  socket.on("role", function(data) {
    console.log("Recieved a role!");
    changeRole(data);
    role = data;
  });

  socket.on('mouse',
    // When we receive data
    function(data) {
      //console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill('black');
      noStroke();
      ellipse(data.x, data.y, 5, 5);
    }
  );

  socket.on('clearCanvas', function() {
    clear();
  });

  //var redButton = createButton('Red');
  //formatButton(redButton, 'red');
  //var blueButton = createButton('Blue');
  //formatButton(blueButton, 'blue');
  //var yellowButton = createButton('Yellow');
  //formatButton(yellowButton, 'yellow');
  // var button = createButton('ClearCanvas');
  // formatButton(button, 'black');
  //redButton.parent('colorPicker');
  //blueButton.parent('colorPicker');
  //yellowButton.parent('colorPicker');
  // button.parent('colorPicker');






  // socket.on('colorUpdate', function(receivedColor){
  //   myColor = receivedColor;
  // });



  // socket.on('name', function(data) {

  // });
  //redButton.mouseClicked(clickRed());
  //blueButton.mousePressed(clickBlue());
  //yellowButton.mousePressed(clickYellow());
  //button.mousePressed(clickClear);
}

function mouseDragged() {
  if (role == "drawer") {
    fill('black');
    noStroke();
    ellipse(mouseX, mouseY, 5, 5);
    // Send the mouse coordinates
    sendmouse(mouseX, mouseY);
  }
  // Draw some white circles

}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  // console.log("sendmouse: " + xpos + " " + ypos);

  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse', data);
}

// function formatButton(button, tempColor) {
//   button.addClass('btn');
//   button.style('background-color', tempColor);
//   button.style('color', 'white');
// }

/*
function clickBlue(){
  myColor = color(0,0,255);
  //sendColor(myColor);
}*/

/*
function clickRed(){
  myColor = color(255,0,0);
  sendColor(myColor);
}*/

/*
function clickYellow() {
  myColor = color(255,255,0);
  sendColor(myColor);
}*/

/*
function clickClear() {
  clear();
  sendClear(); 
}*/



// function sendClear() {
//   socket.emit('clearCanvas');
// }




// function sendColor(myColor) {
//   console.log("sending color: " + myColor);
//   socket.emit('colorUpdate', myColor);
// }

// function mouseClicked() {
//   clear();
//   mycolor = color(random(255),random(255),random(255));

//   sendColor(myColor);
// }

/* No longer need this 
function updateColor() {
  console.log("Changing color");
  $("ul").on("click", "li", function() {

    $(this).siblings().removeClass("selected");

    $(this).addClass("selected");

    color = $(".selected").css("background-color");
    console.log("selected color = " + myColor);

    sendColor(myColor);
  });
}*/




/*
$("#redColor").click(function() { 
  
  console.log("Switch to red!");
  
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  
  var color = $(".selected").css("backgroundColor");
  color = hexc(color);
  console.log("selected color = " + color);

  sendColor(myColor);
});

$("#blueColor").click(function() { 
  
  console.log("Switch to blue!");
  
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  
  var color = $(".selected").css("backgroundColor");
  color = hexc(color);
  console.log("selected color = " + color);

  sendColor(color);
});

$("#yellowColor").click(function() { 
  
  console.log("Switch to yellow!");
  
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  
  var color = $(".selected").css("backgroundColor");
  color = hexc(color);
  console.log("selected color = " + color);

  sendColor(color);
});

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
}
*/
