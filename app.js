var desmondApp = angular.module('desmondApp', []);
desmondApp.controller('desmondController', function ($scope) {
  $.ajax({
    url: '/collectDes',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token_here'
    },
    success: function (response) {
      // Object.entries converts the data object into an array of pairs
      // Then I'm using a map to transform the pairs into an object with title and details properties
      $scope.dmails = response.results;
      $scope.$apply();
    },
    error: function (jqXHR, textStatus) {
      console.error('Error occurred:', textStatus);
    }
  });
});