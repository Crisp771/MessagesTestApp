myApp.component('paginationComponent', {
    templateUrl: '/controllers/views/paginationView.html',
    controller: ['$scope', function ($scope){
        var vm = this;

        $scope.currentPage = $scope.$parent.currentPage;
        $scope.pages = $scope.$parent.pages;

        $scope.$parent.$watch('currentPage', function(currentPage){
            $scope.currentPage = currentPage;
        });
        
        $scope.$parent.$watch('currentPage', function(currentPage){
            $scope.currentPage = currentPage;
        });
        

        $scope.getFirstPage = function(){
            if ($scope.pages > 1) {
                $scope.$parent.currentPage = 1;
            }
        };

        $scope.getPreviousPage = function(){
            if ($scope.pages > 1) {
                $scope.$parent.currentPage--;
            }
        }

        $scope.getNextPage = function() {
            if($scope.currentPage < $scope.pages){
                $scope.$parent.currentPage++;
            }
        }

        $scope.getLastPage = function() {
            $scope.$parent.currentPage = $scope.pages;
        }

    }]
});