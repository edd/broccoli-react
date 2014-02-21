/*jslint indent: 2, node: true, nomen: true, browser: true*/
/*global it, afterEach */
'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
  rimraf.sync('temp');
  rimraf.sync('tmp');
});

it('should compile React', function () {
  assert.equal(
    fs.readFileSync('expected/test.js', 'utf8'),
    fs.readFileSync('temp/test.js', 'utf8')
  );
});