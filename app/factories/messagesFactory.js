myApp
    .factory('messagesFactory', function ($http) {
        var host = 'https://website-dev.enterpriseinns.plc.uk';
        var endPoint = host + '/_vti_bin/Brightstarr.EI.Intranet/Retailer/Retailer.svc/'

        function getAccounts(userId) {
            return $http.get(endPoint + 'GetPubAccounts?userId=' + userId);
        };

        function getPubMessages(userId, accountCode, pageNumber, pageSize) {
            return $http.get(endPoint + 'getPubMessages?userId=' + userId + '&accountCode=' + accountCode + '&pageNumber=' + pageNumber + '&take=' + pageSize);
        };

        function getDashboardMessages(userId, pageNumber, pageSize) {
            return $http.get(endPoint + 'GetDashboardMessages?userId=' + userId + '&pageNumber=' + pageNumber + '&take=' + pageSize + '&n=0');
        };

        function deleteDashboardMessages(userId, messageId) {
            return $http.post(endPoint + 'DeleteDashboardMessage', { "userId": userId, "messageId": messageId });
        };

        // thing ref would be an enum, something like "messages", "documents", "upcomingevents"
        // Then we'd interrogate a service like above with the ref
        function getThingCount(thingRef) {
            return {"count" : 5 , "ref" : "messages"};  // example return object;
        };

        return { 
            getAccounts: getAccounts, 
            getDashboardMessages: getDashboardMessages, 
            getPubMessages : getPubMessages,
            deleteDashboardMessages : deleteDashboardMessages, 
            getThingCount : getThingCount
         };
             
    });