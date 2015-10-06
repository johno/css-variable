'use strict'

var test = require('tape')
var cssVariable = require('..')

test('is-custom-property', function (t) {
  t.plan(3)

  t.ok(cssVariable().isCustomProperty('--foo'))
  t.ok(cssVariable().isCustomProperty('var(--foo)'))
  t.ok(!cssVariable().isCustomProperty('blah--blah'))
})

test('strip-custom-property-syntax', function (t) {
  t.plan(3)

  t.equal(cssVariable().stripCustomPropertySyntax('--foo'), 'foo')
  t.equal(cssVariable().stripCustomPropertySyntax('var(--foo)'), 'foo')
  t.equal(cssVariable().stripCustomPropertySyntax('blah--blah'), 'blah--blah')
})

test('is-sass-variable', function(t) {
  t.plan(2)

  t.ok(cssVariable().isSassVariable('$foo'))
  t.ok(!cssVariable().isSassVariable('blah'))
})

test('strip-sass-syntax', function(t) {
  t.plan(2)

  t.equal(cssVariable().stripSassSyntax('$foo'), 'foo')
  t.equal(cssVariable().stripSassSyntax('blah'), 'blah')
})

test('is-less-variable', function(t) {
  t.plan(2)

  t.ok(cssVariable().isLessVariable('@foo'))
  t.ok(!cssVariable().isLessVariable('blah'))
})

test('strip-less-syntax', function(t) {
  t.plan(2)

  t.equal(cssVariable().stripLessSyntax('@foo'), 'foo')
  t.equal(cssVariable().stripLessSyntax('blah'), 'blah')
})
