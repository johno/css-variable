# css-variable [![Build Status](https://secure.travis-ci.org/johnotander/css-variable.png?branch=master)](https://travis-ci.org/johnotander/css-variable) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A CSS variable transformer, supports Less, Sass, stylus and custom properties.

## Installation

```bash
npm install --save css-variable
```

## Usage

```javascript
var cssVariable = require('css-variable')

cssVariable.css('--blue').sass()  // => $blue
cssVariable.css('var(--blue)').less()  // => @blue
cssVariable.stylus('blue').css()  // => '--blue'
cssVariable.css('var(--blue)').cssDecl()  // => '--blue'
cssVariable.css('--blue').cssVal()  // => 'var(--blue)'
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
