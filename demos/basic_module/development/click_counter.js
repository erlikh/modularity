goog.provide('click_counter');
goog.require('modularity');


/**
 * A simple widget that displays how often a button got clicked.
 *
 * @param {jQueryObject} container The container element for the click counter section of the page.
                                   This div is expected to contain a DOM element with the class 'counter' 
                                   to be used as the display for the count and a DOM element with the class 'button'
                                   which is listened to for clicks.
 * @constructor
 */
var ClickCounter = function(container) {
  
  // Make this class a module.
  modularity.widgetize(this, container);
  
  /**
   * The display element for the number of clicks.
   * @type jQueryObject
   */
  this.display = container.find('.display');

  // Listen to clicks on the button.
  container.find('.button').click(this.callback(this.button_clicked));
  
  /**
   * How many times has the button been clicked already?
   * @type {number}
   */
  this.current_clicks = 0;
};


/**
 * Called when the button element is clicked.
 */
ClickCounter.prototype.button_clicked = function() {

  // Count this click.
  this.current_clicks++;

  // Update the display.
  this.display.html(ClickCounter.display_html(this.current_clicks));
};
      

/**
 * Updates the display element with the current click count.
 * @param {number} count The number of times the button has been clicked.
 */
ClickCounter.display_html = function(count) {
  if (count === 1) {
    return "Please click again";
  } else {
    return count+" clicks!";
  }
};    
