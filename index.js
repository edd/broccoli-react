var Filter = require('broccoli-filter');
var React = require('react-tools').transform;

module.exports = ReactFilter;

ReactFilter.prototype = Object.create(Filter.prototype);
ReactFilter.prototype.constructor = ReactFilter;

function ReactFilter (inputTree, options) {
  if (!(this instanceof ReactFilter)) return new ReactFilter(inputTree, options);

  this.inputTree = inputTree;
  this.options = options || {};
}

ReactFilter.prototype.extensions = ['jsx'];
ReactFilter.prototype.targetExtension = 'js';

ReactFilter.prototype.processString = function (string) {
  var result = React(string);

  return result;
};