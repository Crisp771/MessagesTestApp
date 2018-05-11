angular.module('myApp')
    .factory('retailerFactory', function ($http) {
        var endPoint = '/_vti_bin/Brightstarr.EI.Intranet/Retailer/Retailer.svc/'
        
        function getAccounts(userId) {
            return $http.get(endPoint + 'GetPubAccounts?userId=' + userId);
        }

        function getDashboardMessages(userId, pageNumber, pageSize) {
            return $http.get(endpoint + 'GetDashboardMessages?userId=' + userId + '&pageNumber=' + pageNumber + '&take=' + messagePageSize + '&n=0');
        }

        function deleteDashboardMessages(userId, messageId) {
            return $http.post(endPoint + 'DeleteDashboardMessage', { "userId": userId, "messageId": messageId });
        }
    });