/**
 * This script is executed when the document is ready.
 * It makes a GET request to the '/collectDes' endpoint.
 *
 * @module index
 */

$(document).ready(function () {
  /**
   * AJAX GET request to '/collectDes' endpoint.
   * On success, it processes the received data and clones the '#templateDmail' element for each item in the data.
   * Each cloned element is then populated with data from an item and appended to the parent of '#templateDmail'.
   * If the data is not successful or there are no items in the data, it logs a message to the console.
   * On error, it logs an error message to the console.
   */
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