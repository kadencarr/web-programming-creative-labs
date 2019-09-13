/* global angular */
angular.module('app', []);
angular.module('app').controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $http, $interval) {
    $scope.currentUsername = "Charzard";
    $scope.guesses = [];
    $scope.role = "guesser";
    $interval(function(){$scope.updateGuesses();}, 1000);

    $scope.updateGuesses = function() {
        $http.get('getguesses').then(function(res) {
            console.log("Update!");
            console.log(res);
            $scope.guesses = res.data;
        });
    };

    $scope.addGuess = function() {
        console.log("Current guessText when called: " + $scope.guessText);
        var manualGuessText = document.getElementById('guess-input').value;
        console.log("Manual grab of input text: " + manualGuessText);
        var guessData = { 
            username: $scope.currentUsername + ":", 
            guess: manualGuessText 
        };
        console.log(guessData);
        
        var equal = angular.equals(manualGuessText, $scope.currentWord);
        if(equal){
            
            // Play victory music!
            var audio = new Audio('bizet.m4a');
            audio.play();
            
            guessData = { 
                username: "Congrats! " + $scope.currentUsername + " guessed the word correctly!", 
                guess: ""
            };
            console.log("Sending http request...");
            $http({
                url: 'getguesses',
                method: "POST",
                data: guessData
            }).success(function(data, status, headers, config) {
                console.log("Post worked");
            }).error(function(data, status, headers, config) {
                console.log("Post failed");
            });
        }
        //words do not match, post guess
        else {
            console.log("Sending http request...");
            $http({
                url: 'getguesses',
                method: "POST",
                data: guessData
            }).success(function(data, status, headers, config) {
                console.log("Post worked");
            }).error(function(data, status, headers, config) {
                console.log("Post failed");
            });
        }
        
        // $scope.guessText = "";
        document.getElementById('guess-input').value = "";
        $scope.updateGuesses();
    };
    
    $scope.logGuess = function() {
        console.log($scope.guessText);
    };
}
