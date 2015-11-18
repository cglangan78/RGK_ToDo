// Add functionality to the to-do list application
var list = $('.list');
// Remove item

$(list).on('click', '.glyphicon-remove', function() {
  $(this).parent().remove();
});

// Finish list item; task will receive strikethrough, move task to the end and 'x' will be replaced with green check mark; unchecking will remove strikethrough.

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

$('form').on('post', function(event) {
  //event.preventDefault();
  var newItem = $('#todo');
  $.ajax({
    url: '/api',
    method: 'POST',
    data: newItem.val(),
    dataType: 'application/json',
    success: function(data){
      listItem = '<p>' +
        '<input type="checkbox"><i class="glyphicon glyphicon-star"></i>' +
          '<span>' + newItem.val() + '</span>' +
          '<i class="glyphicon glyphicon-remove"></i>' +
          '</p>';
      if (newItem.val() !== '') {
        $(list).prepend(listItem);
        console.log(newItem.val());
        newItem.val('');
      }
    }
  })
});

//adding AJAX
