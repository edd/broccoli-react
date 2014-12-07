'use strict';

function react() {
  var build = require('./index');

  var tree = build('./test/fixture/');

  return build(tree, {extensions: ['js'], transform: { harmony: true }});
}

module.exports = react();
