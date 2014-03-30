'use strict';

module.exports = function (broccoli) {
  var build = require('./index');

  var tree = build('./test/fixture/');

  return build(tree, {extensions: ['js']});
};