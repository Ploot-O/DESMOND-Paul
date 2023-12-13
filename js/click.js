$(document).ready(function() {
  $('.card').click(function() {
    var sender = $(this).find('.sender').text();
    var subject = $(this).find('.subject').text();
    var body = $(this).find('.body').text();

    $('#modal-sender').text('Sender: ' + sender);
    $('#modal-subject').text('Subject: ' + subject);
    $('#modal-body').text('Body: ' + body);

    $('#emailModal').modal('show');
  });
});