
$.get("includes/header.html", function (data) {
  $("#header").append(data);

  $('#form-send').click(function (e) {
    e.preventDefault();

    var senderUrl = window.location.href;
    senderUrl = senderUrl.replace(/https:\/\//, '');
    senderUrl = senderUrl.replace(/\//g, '');

    var data = {
      sender: senderUrl,
      destination: $('#form-destination').val(),
      subject: $('#form-subject').val(),
      body: $('#form-body').val(),
    };

    console.log(data);

    $.ajax({
      url: window.location.href + 'sendDes',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (response) {
        console.log('Success:', response);
        alert('Success!');
      },
      error: function (error) {
        console.log('Error:', error);
        alert('Error!');
      }
    });

    $('#form-destination').val('');
    $('#form-subject').val('');
    $('#form-body').val('');

  });

});

$.get("includes/form.html", function (data) {
  $("body").append(data);
});