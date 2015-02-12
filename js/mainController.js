var app = angular.module('quoteBook');

app.controller('MainController', function($scope, mainService){
    
    $scope.searchTerm = '';
    
    $scope.getData = function() {
      $scope.quotes = mainService.getData();
    };
    $scope.getData();
    
    $scope.addData = function() {
      mainService.addData($scope.text, $scope.author);
        $scope.text = '';
        $scope.author = '';
    }
    
    $scope.removeData = function($index) {
       mainService.removeData($index);   
    }
    
    $scope.toggle = function() {
		if($scope.showForm) {
			$scope.showForm = false;
		} else {
			$scope.showForm = true;
		}
	};

	$scope.showRemove = function() {
		if($scope.showRemoveQuote) {
			$scope.showRemoveQuote = false;
		} else {
			$scope.showRemoveQuote = true;
		}
	};
    


});