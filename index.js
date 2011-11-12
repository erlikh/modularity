$(function() {
  
  // Instantiate demo modules.
  new ClickCounter1($('.click_counter_demo_1'));
  
  var button = new Button($('.click_counter_demo_2 .button'));
  var display = new Display($('.click_counter_demo_2 .display'));
  new ClickCounter2(button, display);
  
  // Create tooltips for code sections.
  $('.hoverable').tooltip({ 
      track: true, 
      delay: 0, 
      showURL: false, 
      showBody: " - ", 
      fade: 250 
  });
});