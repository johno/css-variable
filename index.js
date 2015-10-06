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

  if (this.isCustomProperty()) {
    this.base = this.stripCustomPropertySyntax()
  } else if (this.isSassVariable()) {
    this.base = this.stripSassSyntax()
  } else if (this.isLessVariable()) {
    this.base = this.stripLessSyntax()
  } else {
    this.base = this.variable
  }
}


CssVariable.prototype = {
  isCustomProperty: function (variable) {
    return isCustomProperty(variable || this.variable)
  },
  isSassVariable: function (variable) {
    return isSassVariable(variable || this.variable)
  },
  isLessVariable: function (variable) {
    return isLessVariable(variable || this.variable)
  },
  stripCustomPropertySyntax: function (variable) {
    return stripCustomPropertySyntax(variable || this.variable)
  },
  stripSassSyntax: function (variable) {
    return stripSassSyntax(variable || this.variable)
  },
  stripLessSyntax: function (variable) {
    return stripLessSyntax(variable || this.variable)
  },
  getBase: function () {
    return this.base
  },
  getSass: function () {
    return '$' + this.base
  },
  getLess: function () {
    return '@' + this.base
  },
  getStylus: function () {
    return this.base
  }
}

module.exports = CssVariable
