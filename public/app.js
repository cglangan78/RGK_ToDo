$(document).ready(function(){
  // Add functionality to the to-do list application
  var list = $('.list');


  // Remove item
  $(list).on('click', '.glyphicon-remove', function() {
   var itemName = $('#todo').val();
    $.ajax({
      url: '/api/' + itemName.item_name,
      method: 'DELETE',
      success: function(){
        console.log("worked")
    }
   })
  $(this).parent().remove();
  });

  // Finish list item; task will receive strikethrough, move task to the end and
  //'x' will be replaced with green check mark; unchecking will remove strikethrough.

  $(list).on('click', 'input[type="checkbox"]', function() {
    var $span = $(this).parent().find('span'),
        $remove = $(this).parent().find('i.glyphicon-remove');
        $ok = $(this).parent().find('i.glyphicon-ok');

    if ($(this).is(":checked")) {
        $span.wrap('<strike>');
        $remove.removeClass('glyphicon-remove');
        $remove.addClass('glyphicon-ok');
        $(this).parent().insertAfter('p:last-child');
        //console.log('Checked.');
    } else {
        $span.unwrap();
        $ok.addClass('glyphicon-remove');
        $ok.removeClass('glyphicon-ok');
        //console.log('Not checked');
      }
  });

  // Mark as priority (starred)

  $(list).on('click', '.glyphicon-star', function() {
    $(this).toggleClass('active');
    $(this).parent().insertBefore('p:first-child');
  });

  // Form submission prevents default behavior and appends new list item to the top

  $('#add-item').on('submit', function(event) {
    console.log('submitted');
    event.preventDefault();
    var itemName = $('#todo').val();
    var newItem = {
      item_name: itemName
    }
    console.log(newItem);
    $.ajax({
      url: '/api',
      method: 'POST',
      data: JSON.stringify(newItem),
      contentType: 'application/json',
      success: function(data){
        var listItem = '<p>' +
          '<input type="checkbox"><i class="glyphicon glyphicon-star"></i>' +
            '<span>' + newItem.item_name + '</span>' +
            '<i class="glyphicon glyphicon-remove"></i>' +
            '</p>';
        if (data !== '') {
          $('.list').prepend(listItem);
          $('#todo').val('');
        }
      }
    })
  });
});
