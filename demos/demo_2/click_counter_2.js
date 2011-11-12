goog.provide('click_counter');
goog.require('button');
goog.require('display');

/**
 * A composite widget that displays on its display element 
 * how often its button was clicked.
 *
 * @param {Button} button The button to monitor for clicks.
 * @param {Display} display The display element to display 
 *                          the click count on.
 * @constructor
 */
function ClickCounter2(button, display) {

  // Make this object a module. 
  modularity.widgetize(this, null);

  /**
   * Counter for how often the button was clicked.
   * @type {number}
   */
  this.clicked_counter = 0;

  /**
   * The display element.
   * @type {Display}
   */
  this.display = display;

  // Listen to CLICKED events from the 'button' module.
  button.bind_event(Button.events.CLICKED, 
                    this.callback(this.on_button_clicked));
};

/**
 * Called when the button was clicked.
 */
ClickCounter2.prototype.on_button_clicked = function() {
  this.display.display_html(ClickCounter2.display_html(++this.clicked_counter))
};

/**
 * Updates the display element with the current click count.
 * @param {number} count The number of times the button has been clicked.
 */
ClickCounter2.display_html = function(count) {
  if (count === 1) {
    return "Click again!";
  } else {
    return count+" clicks!";
  }
};