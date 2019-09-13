/* global angular */
/* global $ */
angular.module('app', []);
angular.module('app').controller('mainCtrl', mainCtrl);
angular.module('app').directive('navbar', navbar);

function mainCtrl($scope, $http) {
   $scope.loadList = function() {
        $.ajax({
            url: "/getList",
            type: "GET",
            data: {
                "Owner:": $scope.user
            },
            contentType: "application/json; charset=utf-8",

            success: function(data, status, jqXHR) {
                console.log(data);
                var everything = [];
                for (var item in data) {
                    let myItem = data[item];
                    everything.push(myItem);
                }
                console.log("Filling wishlist...");
                $scope.wishlist = everything;
                $scope.$digest();
            }
        });
    };
   
   
    window.onload = function() {
        $scope.loadList();
    };
    $scope.user = "";

    $scope.grabSessionInfo = function() {
        $http.get('/confirm-data')
            .success(function(user) {
                if (user) {
                    console.log(user);
                    $scope.user = user;
                }
            });
    };
    $scope.grabSessionInfo();

    $scope.addToList = function() {
        event.preventDefault();
        console.log("Adding to List...");
        var item = {
            Item: $scope.newItem,
            Owner: $scope.user
        };
        console.log(item);
        $http.post('/addItem', item).success(function(data) {
            console.log("adding new item to list");
            $scope.wishlist.push(data);
            console.log("Current Wishlist:");
            console.log($scope.wishlist);
        });
        $scope.newItem = "";
        $scope.loadList();
    };


    $scope.loadList();
}

function navbar() {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "/directives/navbar-directive.html";
    return directive;
}
