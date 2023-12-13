angular.module('desmondApp', [])
  .controller('desmondController', ['$scope', function ($scope) {

    var token = 'your_token_here';
    var settings = {
      url: '/collectDes',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };

    $.ajax(settings)
      .done(function (response) {
        $scope.dmails = response.results;
      })
      .fail(function (jqXHR, textStatus) {
        console.error('Error occurred:', textStatus);
      });
  }]);