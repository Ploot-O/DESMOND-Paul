$(document).ready(function() {
  $('#form-send').click(function(e) {
    e.preventDefault();

    var data = {
      sender: window.location.href.replace('https:', '').replace('/', ''),
      destination: $('#form-destination').val(),
      subject: $('#form-subject').val(),
      body: $('#form-body').val(),
    };

    $.ajax({
      url: window.location.href + 'sendDes',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
        console.log('Success:', response);
        alert('Success!');
      },
      error: function(error) {
        console.log('Error:', error);
        alert('Error!');
      }
    });

    $('#form-destination').val('');
    $('#form-subject').val('');
    $('#form-body').val('');

  });
});