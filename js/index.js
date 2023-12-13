$(document).ready(function () {
  $.ajax({
    url: '/collectDes',
    method: 'GET',
    success: function (data) {
      if (data.success && data.results.length > 0) {
        var templateDmail = $('#templateDmail');
        data.results.forEach(function (item) {
          var dmailElement = templateDmail.clone(true);
          dmailElement.attr('id', item.id);
          dmailElement.find('.sender').text(item.sender);
          dmailElement.find('.destination').text(item.destination);
          dmailElement.find('.subject').text(item.subject);
          dmailElement.find('.body').text(item.body);
          dmailElement.css('display', 'block');
          templateDmail.parent().append(dmailElement);
        });
      } else {
        console.log('No data found or not a success');
      }
    },
    error: function () {
      console.log('Error fetching data from /collectDes');
    }
  });
});