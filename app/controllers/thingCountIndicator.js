myApp.component('thingIndicatorComponent', {
    templateUrl: '/controllers/views/thingIndicatorView.html',
    bindings : {thingref : '@'},
    controller: ['$scope', '$sce', 'messagesFactory', function messagesController($scope, $sce, messagesFactory) {
        var vm = this;

        $scope.thingref = vm.thingref;
        $scope.thingIndicator = [];

        $scope.thingIndicator = messagesFactory.getThingCount("messages");

    }]
});