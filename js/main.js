var $input = $('#list-input');
var $list = $('.todo');

$('form').on('submit', function (e) {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $li.val('');
  $list.append($li);
});

$('ul').on('click', 'li', function () {
  $(this).toggleClass('crossOut');
});
