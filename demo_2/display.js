goog.provide('display');
goog.require('modularity');

/**
 * A generic display element.
 *
 * Displays any given HTML snippet inside its container.
 *
 * @param {jQueryObject} container The container for this display element.
 * @constructor
 */
var Display = function(container) {
  
  // Make this object a module.
  modularity.widgetize(this, container);
};


/**
 * Displays the given HTML snippet.
 *
 * @param {string} html The HTML snippet to display.
 */
Display.prototype.display_html = function(html) {
  this.container.html(html);
};
