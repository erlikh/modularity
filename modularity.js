/*
 * A framework for pragmatic object-oriented JavaScript.
 */


// Google Closure compiler stuff.
var goog = goog || {};
goog.provide = function() {};
goog.require = function() {};

// Notice for the Closure compiler. This file provides the 'modularity' object.
goog.provide('modularity');


/**
 * The root namespace.
 */
var modularity = modularity || {};


/**
 * DOM object that is used to fire global events on.
 * @return jQueryObject
 */
modularity.global_event_container = function() {
  if (!modularity.global_event_container_cache) {
    modularity.global_event_container_cache = $(window);
  }
  return modularity.global_event_container_cache;
};


/**
 * Checks whether the given condition is true. 
 * 
 * Shows an alert with the given message if not.
 * @param {*} condition The condition to check. Must be truthy.
 * @param {string} message The error message to display.
 */
modularity.assert = function(condition, message) {

  // Reject undefined or null variables and empty arrays.
  if (typeof(condition) === 'undefined' || condition === null || condition.length === 0) {
    alert(message);
    return;
  }

  // Reject everything else that is falsy.
  if (!condition) { alert(message); }
};


/**
 * Returns a function that when called calls the given function with the given parameters.
 * 
 * See http://en.wikipedia.org/wiki/Partial_application.
 *
 * @param {function()} func The function to bind parameters to.
 * @param {Object} that The value of 'this'.
 * @param {...*} var_args
 * @return {function()} The function with bound arguments.
 */
 modularity.bind = function(func, that, var_args) {
   if (!func) {
     alert('Empty function provided to modularity.bind');
     return func;
   }
   var args = [];
   for (var n = 2; n < arguments.length; n++) {
     args.push(arguments[n]);
   }
   return function() {
     // NOTE (kg):
     // $.merge adds the second array to the first.
     // Hence we need to merge everything into an empty array here,
     // otherwise the args keep accumulating when this callback is called multiple times.
     var newArgs = $.merge([], args);
     return func.apply(that, $.merge(newArgs, arguments));
   };
};


/**
 * Subscribes to the given global event tymodularity.
 * 
 * Calls the given function when the given global event type happens.
 * 
 * @param {string} event_type The event tymodularity.
 * @param {function()} callback The callback method.
 */
modularity.bind_global_event = function(event_type, callback) {
  modularity.assert(event_type, "modularity.bind_global_event: parameter 'event_type' is empty");
  modularity.global_event_container().bind(event_type, callback);
};


/**
 * Fires the given global event with the data payload.
 *
 * @param {string} event_type Name of the event to fire.
 * @param {(Array|Object)=} data Data to attach as a parameter to the event.
 *                               If you want to pass multiple parameters, pass an Array or Hash.
 */
modularity.fire_global_event = function(event_type, data) {

  // Check parameters.
  modularity.assert(event_type, 'modularity.fire_global_event: You must provide the event type to fire.');
  if (typeof data === 'undefined') {
    data = [];
  }
  modularity.global_event_container().trigger(event_type, data);
};


/**
 * Makes the given instance a widget.
 *
 * Call this method in the constructor to make JS classes widgets. 
 *
 * @param {Object} instance The object instance to convert to a widget.
 * @param {jQueryObject} container The container element for this widget.
 */
modularity.widgetize = function(instance, container) {
  
  // Ensure we have a container.
  if (container !== null && !container.length) {
    alert('No container given.');
    return;
  }

  /**
   * The container element for this widget.
   * @type {jQueryObject}
   */
  instance.container = container;

  /**
   * Makes the given function ready to be used as a callback.
   * 
   * Call this on methods that you want to use as callback methods for events.
   *
   * Wrong: $('#foo').click(this.foo_clicked);   // 'this' will have the wrong value when the method is called.
   * Right: $('#foo').click(this.callback(this.foo_clicked));
   *
   * @param {function()} func The function to make callback-able.
   * @return {function()}
   * @this {Object}
   */
  instance.callback = function(func) {
    var args = [func, this];
    for (var n = 1; n < arguments.length; n++) {
      args.push(arguments[n]);
    }
    return modularity.bind(func, this, args);
  };
  
  /**
   * Checks if the 'this' object is correctly bound.
   *
   * This is for debugging purposes.
   * Call this method in instance methods that are used in callbacks if you aren't sure they are correctly bound.
   *
   * @param {string=} function_name The name of the function that is checked (for the error message).
   * @this {Object}
   */
  instance.check_bind = function(function_name) {
    if (typeof(this.container) === 'undefined') {
      throw 'Incorrect scope binding' + function_name ? ' in: ' + function_name : '.';
    }
  };

  /**
   * Calls the given function when this widget fires the given local event.
   *
   * @param {string} event_type The name of the event that should trigger the function.
   * @param {function()} callback The function to call when the event fires.
   * @this {Object}
   */
  instance.bind_event = function(event_type, callback) {
    modularity.assert(event_type, "bind_event: parameter 'event_type' is empty");
    this.container.bind(event_type, callback);
  };

  /**
   * Fires the given local event with the given data payload.
   *
   * @param {string} event_type The event type to fire.
   * @param {(Array|Object)=} data Data to send with the event.
   *                               If you want to send multiple variables, please use an Array or Hash.
   * @this {Object}
   */
  instance.fire_event = function(event_type, data) {
    modularity.assert(event_type, 'fire_event: You must provide the event type to fire.');

    if (typeof data === 'undefined') {
      data = {};
    }
    this.container.trigger(event_type, data);
  };
};
