'use strict'

var test = require('tape')
var cssVariable = require('..')

test('css-variable', function (t) {
  t.plan(45)

  var variables = ['var(--foo-bar)', '--foo-bar', 'foo-bar', '$foo-bar', '@foo-bar']

  variables.forEach(function (variable) {
    var cssVar = cssVariable(variable)
    t.equal(cssVar.base(), 'foo-bar')
    t.equal(cssVar.sass(), '$foo-bar')
    t.equal(cssVar.scss(), '$foo-bar')
    t.equal(cssVar.less(), '@foo-bar')
    t.equal(cssVar.stylus(), 'foo-bar')
    t.equal(cssVar.css(), '--foo-bar')
    t.equal(cssVar.cssDecl(), '--foo-bar')
    t.equal(cssVar.cssFunc(), 'var(--foo-bar)')
    t.equal(cssVar.cssVal(), 'var(--foo-bar)')
  })
})

test('is-custom-property', function (t) {
  t.plan(3)

  t.ok(cssVariable('awesome-var').isCustomProperty('--foo'))
  t.ok(cssVariable('awesome-var').isCustomProperty('var(--foo)'))
  t.ok(!cssVariable('awesome-var').isCustomProperty('blah--blah'))
})

test('strip-custom-property-syntax', function (t) {
  t.plan(3)

  t.equal(cssVariable('awesome-var').stripCustomPropertySyntax('--foo'), 'foo')
  t.equal(cssVariable('awesome-var').stripCustomPropertySyntax('var(--foo)'), 'foo')
  t.equal(cssVariable('awesome-var').stripCustomPropertySyntax('blah--blah'), 'blah--blah')
})

test('is-sass-variable', function(t) {
  t.plan(2)

  t.ok(cssVariable('awesome-var').isSassVariable('$foo'))
  t.ok(!cssVariable('awesome-var').isSassVariable('blah'))
})

test('strip-sass-syntax', function(t) {
  t.plan(2)

  t.equal(cssVariable('awesome-var').stripSassSyntax('$foo'), 'foo')
  t.equal(cssVariable('awesome-var').stripSassSyntax('blah'), 'blah')
})

test('is-less-variable', function(t) {
  t.plan(2)

  t.ok(cssVariable('awesome-var').isLessVariable('@foo'))
  t.ok(!cssVariable('awesome-var').isLessVariable('blah'))
})

test('strip-less-syntax', function(t) {
  t.plan(2)

  t.equal(cssVariable('awesome-var').stripLessSyntax('@foo'), 'foo')
  t.equal(cssVariable('awesome-var').stripLessSyntax('blah'), 'blah')
})
