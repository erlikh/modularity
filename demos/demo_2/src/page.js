goog.require('click_counter');

$(function() {
  var button = new Button($('.button'));
  var display = new Display($('.display'));
  new ClickCounter2(button, display);
});