myApp
.component('accountSelector', {
    templateUrl : '/app/controllers/views/accountView.html',
    controller : ['$scope', 'messagesFactory', function accountController ($scope, messagesFactory) {

        var vm = this;

        $scope.accounts = [];
        $scope.currentAccount = '';

        messagesFactory.getAccounts('08e1c9e8-ef18-4099-a963-29ba59ef214c').success(function(data){
            $scope.messages = data;
          });
        
    }]
});