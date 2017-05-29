/*jslint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
'use strict';

var _require = require('../js/foo'),
    bar = _require.bar,
    baz = _require.baz;

module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Output'
    );
  }
});