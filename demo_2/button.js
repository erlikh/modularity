goog.provide('button');
goog.require('modularity');

/**
 * A generic button. 
 * 
 * Fires 'click' events.
 *
 * @param {jQueryObject} container The container element for this button.
 * @constructor
 */
var Button = function(container) {
  
  // Make this object a module.
  modularity.widgetize(this, container);

  // The whole container is considered a clickable button area.
  container.click(this.callback(this.on_click));
};

/**
 * The different events that this button can fire.
 * @enum {string}
 */
Button.events = {
  CLICKED: 'Button_clicked'
};

/**
 * Called when this button is clicked.
 */
Button.prototype.on_click = function() {

  // Fire the 'clicked' event.
  this.fire_event(Button.events.CLICKED);
};
