$.get("includes/feed.html", function (data) {
  $("body").append(data);
  $('.card').click(function () {

    var sender = $(this).find('.sender').text();
    var subject = $(this).find('.subject').text();
    var body = $(this).find('.body').text();

    console.log(sender, subject, body);

    $('#dmailModal .modal-id').text($(this).attr('id'));
    $('#dmailModal .modal-subject').text(subject);
    $('#dmailModal .modal-sender').text('From: ' + sender);
    $('#dmailModal .modal-messagebody').html(body);

    $('#dmailModal').modal('show');
  });

  $('#deleteMail').click(function (event) {
    event.stopPropagation();

    var cardId = $('#dmailModal .modal-id').text();


    $.ajax({
      url: '/removeDes',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ id: cardId }),
      success: function (response) {
        console.log(response);
        $('#' + cardId).remove();
      },
      error: function (error) {
        console.log(error);
      }
    });
  });


});