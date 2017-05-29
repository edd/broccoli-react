/*jslint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
'use strict';

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