'use strict';

var Filter = require('broccoli-filter');
var babel = require('babel-core');
var reactPreset = require('babel-preset-react');

module.exports = ReactFilter;

ReactFilter.prototype = Object.create(Filter.prototype);
ReactFilter.prototype.constructor = ReactFilter;

function ReactFilter (inputTree, options) {
  if (!(this instanceof ReactFilter)){
    return new ReactFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
  this.babelOptions = this.options.babelOptions || {};
  if (this.options.extensions) {
    this.extensions = options.extensions;
  }
}

ReactFilter.prototype.extensions = ['jsx'];
ReactFilter.prototype.targetExtension = 'js';

ReactFilter.prototype.processString = function (string) {
  var babelOptions = Object.assign({
    babelrc: false,
    presets: [reactPreset],
  }, this.babelOptions);

  var result = babel.transform(string, babelOptions).code;
  return result;
};
