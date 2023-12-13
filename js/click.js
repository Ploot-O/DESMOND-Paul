$(document).ready(function() {
  $('.card').click(function() {
    console.log('click');
    var sender = $(this).find('.sender').text();
    var subject = $(this).find('.subject').text();
    var body = $(this).find('.body').text();

    $('#dmailModalLabel').text('Dmail from: ' + sender);
    $('#dmailModal .modal-body').html('<p>Subject: ' + subject + '</p><br><br><p>Body: ' + body + '</p>');
  });
});