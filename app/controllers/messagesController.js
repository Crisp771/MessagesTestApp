'use strict';

angular.module('myApp.messagesView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/messagesView', {
    templateUrl: 'controllers/views/messagesView.html',
    controller: 'messagesController'
  });
}])

.controller('messagesController', [function() {

}]);