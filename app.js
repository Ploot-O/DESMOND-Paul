var desmondApp = angular.module('desmondApp', []);

desmondApp.controller('dmailController', function ($scope) {

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

desmondApp.controller('sendController', function ($scope) {

  $scope.newDmail = {
    sender: 'desmond-1ov.pages.dev',
    receiver: '',
    subject: '',
    body: ''
  };
  $scope.sendData = function() {
    var formData = new FormData();
    formData.append('sender', $scope.newDmail.sender);
    formData.append('subject', $scope.newDmail.subject);
    formData.append('body', $scope.newDmail.body);

    $.ajax({
      url: '/sendDes',
      method: 'POST',
      data: formData,
      success: function(response) {
        console.log('Data sent successfully');
      },
      error: function(jqXHR, textStatus) {
        console.error('Error occurred:', textStatus);
      }
    });
  };

});