'use strict';

module.exports = function (broccoli) {
  var build = require('./index');

  var tree = build(broccoli.makeTree('./test/fixture/'));

  return build(tree, {extensions: ['js']});
};