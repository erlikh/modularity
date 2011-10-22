goog.provide('click_counter');
goog.require('root');


/**
 * A simple widget that displays how often a button got clicked.
 *
 * @param {jQueryObject} container The container element for the click counter section of the page.
                                   This div is expected to contain a DOM element with the class 'counter' 
                                   to be used as the display for the count and a DOM element with the class 'button'
                                   which is listened to for clicks.
 * @param {number} max_clicks The maximal number of clicks that are allowed.
 * @constructor
 */
var ClickCounter = function(container, max_clicks) {
  
  // Make this class a widget class.
  modularity.widgetize(this, container);
  
  /**
   * The element to click on.
   * @type jQueryObject
   */
  this.button = container.find('.button');
  this.button.click(this.callback(this.button_clicked));

  /**
   * How many times has the button been clicked already?
   * @type {number}
   */
  this.current_clicks = 0;

  /**
   * The display element for the number of clicks.
   * @type jQueryObject
   */
  this.display = container.find('.display');
  
  /**
   * The maximal number of clicks that are allowed.
   * @type number
   */
  this.max_clicks = max_clicks;  
};


/**
 * Called when the button element is clicked.
 */
ClickCounter.prototype.button_clicked = function() {

  // Count this click.
  this.current_clicks++;
  
  // Handle situation where there is only one click left.
  if (this.current_clicks === (this.max_clicks-1)) {
    this.display.html('One click left, make it count!');
    return;
  }
  
  // Handle situation when clicks are exceeded.
  if (this.current_clicks === this.max_clicks) {
    this.display.html("Sorry, this button cannot be clicked on more than "+this.max_clicks+" times.");
    this.button.attr('disabled', 'disabled');
    return;
  }
  
  // Handle situation where there are clicks left.
  this.display.html("You clicked this button "+this.current_clicks+" times.");
};
