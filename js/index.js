$(document).ready(function() {

  $.ajax({
    url: '/collectDes',
    method: 'GET',
    success: function(data) {
      console.log(data);
    },
    error: function() {
      console.log('Error fetching data from /collectDes');
    }
  });

});

$(document).read(function () {

});
