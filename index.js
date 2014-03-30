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
  if (this.options.extensions) {
    this.extensions = options.extensions;
  }
}

ReactFilter.prototype.extensions = ['jsx'];
ReactFilter.prototype.targetExtension = 'js';

ReactFilter.prototype.processString = function (string) {
  var result = react(string);

  return result;
};
