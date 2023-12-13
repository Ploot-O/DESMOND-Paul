angular.module('desmondApp', [])
.controller('desmondController', function() {
  var scope = this;

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
    .done(function(response) {
      scope.dmails = response;
    })
    .fail(function(jqXHR, textStatus) {
      console.error('Error occurred:', textStatus);
    });
});