'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should compile React', function () {
	assert.equal(
		fs.readFileSync('expected/test.js', 'utf8'),
		fs.readFileSync('temp/test.js', 'utf8')
	);
});