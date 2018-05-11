'use strict';

// angular.module('myApp', ['ngRoute', 'messagesFactory'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/messagesView', {
//     templateUrl: 'controllers/views/messagesView.html',
//     controller: 'messagesController'
//   });
// }])

// .controller('messagesController', [function(messagesFactory, $scope) {
//     $scope.messages = messagesFactory.getAccounts('08e1c9e8-ef18-4099-a963-29ba59ef214c');
// }]);

myApp
.controller('messagesController', ['$scope', 'messagesFactory', function($scope, messagesFactory) {
    $scope.messages = [];
    messagesFactory.getAccounts('08e1c9e8-ef18-4099-a963-29ba59ef214c').success(function(data){
      $scope.messages = data;
    })
    //$scope.messages = [{'name1': 'value1','name2': 'value2','name3': 'value3'}];
}]);