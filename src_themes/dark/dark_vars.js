const colors = require('./dark_colors')

module.exports = [

  {
    "name": "String",
    "scope": "string.quoted, string.interpolated, string.template",
    "settings": {
      "foreground": "#AFD4AB"
    }
  },


  {
    "name": "Const primitives",
    "scope": [
      "constant.language", 
      "constant.numeric", 
      "support.constant", 
      "support.variable.dom", 
      "constant.character", 
      "constant.other.color", 
      "constant.other.symbol", 
      "constant.other.key", 
      "keyword.other.unit",
    ],
    "settings": {
      "foreground": colors.INFO
    }
  },
  
  
  {
    "name": "Object type value",
    "scope": [
      "meta.object.type",
    ],
    "settings": {
      "foreground": colors.INFO
    }
  },
  
  {
    "name": "Literal",
    "scope": [
      "meta.object.literal",
      "meta.objectliteral",
      "meta.array.literal",
      // "variable.object.property"
    ],
    "settings": {
      "foreground": colors.INFO
    }
  },

]