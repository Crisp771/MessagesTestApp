'use strict';

myApp.component('messagesComponent', {
  templateUrl: '/controllers/views/messagesView.html',
  controller: ['$scope', '$sce', 'messagesFactory', function messagesController($scope, $sce, messagesFactory) {
    var vm = this;

    $scope.total = 0;
    $scope.unread = 0;
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    $scope.pages = 1;

    $scope.currentAccount = { AccountCode: '' };
    $scope.accounts = [{ AccountCode: '' }];

    messagesFactory.getAccounts('08e1c9e8-ef18-4099-a963-29ba59ef214c')
      .then(function (response) {
        $scope.accounts = response.data;
        $scope.currentAccount = $scope.accounts[0];
      });

    $scope.messages = [];

    $scope.sce = $sce.trustAsHtml;

    $scope.$watch('currentAccount', function (account) {
      if (account) {
        console.log('CurrentAccount Changed to  : ' + account.AccountCode);
        messagesFactory.getPubMessages('08e1c9e8-ef18-4099-a963-29ba59ef214c', $scope.currentAccount.AccountCode, $scope.currentPage, $scope.pageSize)
          .then(function (response) {
            console.log('Got data for account : ' + $scope.currentAccount.AccountCode);
            $scope.messages = response.data.Messages;
            $scope.total = response.data.Total;
            $scope.pages = Math.ceil(response.data.Total / $scope.pageSize);
            $scope.undread = response.data.TotalUndread;
          });
      }
    })
  }]
});
