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
      $scope.dmails = response.results;
      $scope.$apply();
    },
    error: function (jqXHR, textStatus) {
      console.error('Error occurred:', textStatus);
    }
  });
});