$(document).ready(function() {
  $('.card').click(function() {
    var sender = $(this).find('.sender').text();
    var destination = $(this).find('.destination').text();
    var subject = $(this).find('.subject').text();
    var body = $(this).find('.body').text();

    $('#modal-sender').text('Sender: ' + sender);
    $('#modal-destination').text('Destination: ' + destination);
    $('#modal-subject').text('Subject: ' + subject);
    $('#modal-body').html(body);

    $('#emailModal').modal('show');
  });
});