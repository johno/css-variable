'use strict'

var isCustomProperty = require('./util/is-custom-property')
var isLessVariable = require('./util/is-less-variable')
var stripCustomPropertySyntax = require('./util/strip-custom-property-syntax')
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
  isLessVariable: isLessVariable,
  stripCustomPropertySyntax: stripCustomPropertySyntax,
  stripLessSyntax: stripLessSyntax
}

module.exports = CssVariable
