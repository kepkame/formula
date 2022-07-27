/* jshint browser: true */
console.log('Test');

/**
 * No-JS - Adds a no-js class that hides JavaScript dependent site elements.
 */
var elemsClassNojs = document.querySelectorAll('.no-js');
if (elemsClassNojs[0] !== undefined) {
  Array.prototype.forEach.call(elemsClassNojs, function (el) {
    el.classList.remove('no-js');
  });
}

// jQuery
jQuery(document).ready(function($){

});
// jQuery/
