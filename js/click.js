$(document).ready(function() {
  $('.card').click(function() {
    console.log('click');
    var sender = $(this).find('.sender').text();
    var subject = $(this).find('.subject').text();
    var body = $(this).find('.body').text();

    console.log(sender, subject, body);

    $('#dmailModal .modal-sender').text(sender);
    $('#dmailModal .modal-title').text(subject);
    $('#dmailModal .modal-body').html(body);

    $('#dmailModal').modal('show');
  });
});