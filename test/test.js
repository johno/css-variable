'use strict'

var test = require('tape')
var cssVariable = require('..')

test('css-variable', function (t) {
  t.plan(1)

  t.equal(cssVariable(), true)
})
