'use strict';

var Filter = require('broccoli-filter');
var react = require('react-tools').transform;

module.exports = ReactFilter;

ReactFilter.prototype = Object.create(Filter.prototype);
ReactFilter.prototype.constructor = ReactFilter;

function ReactFilter (inputTree, options) {
  if (!(this instanceof ReactFilter)){
    return new ReactFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
  this.transform = this.options.transform || {};
  if (this.options.extensions) {
    this.extensions = options.extensions;
  }
}

ReactFilter.prototype.extensions = ['jsx'];
ReactFilter.prototype.targetExtension = 'js';

ReactFilter.prototype.processString = function (string) {
  try {
    var result = react(string, this.transform);
  } catch (exception) {
    console.error("Error while compiling React tree: %s", exception);
  }

  return result;
};
