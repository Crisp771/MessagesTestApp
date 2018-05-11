'use strict';

angular.module('myApp.messagesController', ['ngRoute', 'messagesFactory'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/messagesView', {
    templateUrl: 'controllers/views/messagesView.html',
    controller: 'messagesController'
  });
}])

.controller('messagesController', [function(messagesFactory) {
    $scope.messages = messagesFactory.getAccounts('08e1c9e8-ef18-4099-a963-29ba59ef214c');
}]);