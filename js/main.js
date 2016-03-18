var $input = $('#grocery-input');
var $list = $(".list");

$('#grocery-list').on('submit', function (e) {
  var $li = $('<li>');
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
