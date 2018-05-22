# [broccoli](https://github.com/joliss/broccoli)-[react](https://github.com/facebook/react) [![Build Status](https://travis-ci.org/eddhannay/broccoli-react.png?branch=master)](https://travis-ci.org/eddhannay/broccoli-react)

A [React JSX](https://github.com/facebook/react) filter for [broccoli](https://github.com/joliss/broccoli).

## Installation

```bash
npm install --save broccoli-react
```
## Usage

```js
var filterReact = require('broccoli-react');
tree = filterReact(tree);
```

## Options

### extensions
Type: `Array`
Default: `['jsx']`

Specify the extensions for the source files.

### babelOptions
Type: `Object`
Default: `{}`

Specify options for babel, useful for e.g. plugins, transforms etc.

```js
tree = filterReact(tree, {
  extensions: ['js'],
  babelOptions: { plugins: ["transform-class-properties"] }
});
```