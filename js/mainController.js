var app = angular.module('quoteBook');

app.controller('MainController', function($scope, mainService){
    
    $scope.getData = function() {
      $scope.quotes = mainService.getData(); 
      console.log($scope.data);
    };
    $scope.getData();


});