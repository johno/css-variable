'use strict'

var isCustomProperty = require('./util/is-custom-property')
var isSassVariable = require('./util/is-sass-variable')
var isLessVariable = require('./util/is-less-variable')
var stripCustomPropertySyntax = require('./util/strip-custom-property-syntax')
var stripSassSyntax = require('./util/strip-sass-syntax')
var stripLessSyntax = require('./util/strip-less-syntax')

var CssVariable = function (variable) {
  if (variable instanceof CssVariable) {
    return variable
  }

  if (!(this instanceof CssVariable)) {
    return new CssVariable(variable)
  }

  this.variable = variable
}


CssVariable.prototype = {
  isCustomProperty: isCustomProperty,
  isSassVariable: isSassVariable,
  isLessVariable: isLessVariable,
  stripCustomPropertySyntax: stripCustomPropertySyntax,
  stripSassSyntax: stripSassSyntax,
  stripLessSyntax: stripLessSyntax
}

module.exports = CssVariable
