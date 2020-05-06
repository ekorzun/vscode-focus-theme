module.exports = [

  {
    "name": "js template-expression",
    "scope": "punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end,punctuation.definition.template-expression.begin.ts,punctuation.definition.template-expression.end.ts",
    "settings": {
      "foreground": "#c678dd"
    }
  },
  {
    "name": "TemplateString",
    "scope": "string.template",
    "settings": {
      "foreground": "#e5c07b"
    }
  },
  {
    "name": "TemplateString",
    "scope": "meta.template.expression",
    "settings": {
      "foreground": "#abb2bf"
    }
  },
  {
    "name": "Number",
    "scope": "constant.numeric",
    "settings": {
      "foreground": "#c678dd"
    }
  },
  {
    "name": "Embeded String Begin and End",
    "scope": [
      "string.embedded.begin",
      "string.embedded.end"
    ],
    "settings": {
      "foreground": "#c678dd"
    }
  },
  {
    "name": "Embeded String",
    "scope": "string.embedded",
    "settings": {
      "foreground": "#98c379"
    }
  },

  {
    "name": "User-defined constant",
    "scope": [
      "constant.character",
      "constant.other"
    ],
    "settings": {
      "foreground": "#56b6c2"
    }
  },
  {
    "name": "Language Variable",
    "scope": "variable.language",
    "settings": {
      "foreground": "#e06c75"
    }
  },

  {
    "name": "Keyword",
    "scope": [
      "keyword",
      "keyword.operator.logical",
      "keyword.operator.constructor"
    ],
    "settings": {
      "foreground": "#ffe2a9"
    }
  },
  {
    "name": "Keyword Operator",
    "scope": "keyword.operator",
    "settings": {
      "foreground": "#7F7F7F"
    }
  },
  
  {
    "name": "Storage type",
    "scope": "storage.type",
    "settings": {
      "foreground": "#56b6c2"
    }
  },
  {
    "name": "Class name",
    "scope": [
      "entity.name.class",
      "entity.name.module",
      "storage.identifier",
      // "support.class"
    ],
    "settings": {
      "foreground": "#61afef"
    }
  },
  

  {
    "name": "Other variable",
    "scope": [
      "variable.other.property",
      "variable.other.block"
    ],
    "settings": {
      "foreground": "#6EC2F2"
    }
  },
  

  {
    "name": "Builtin Functions",
    "scope": [
      "function.support.builtin",
      "function.support.core"
    ],
    "settings": {
      "foreground": "#ffe2a9"
    }
  },
  
  {
    "name": "Tag Class and ID",
    "scope": [
      "entity.name.tag.class",
      "entity.name.tag.id",

    ],
    "settings": {
      "foreground": "#56b6c2"
    }
  },
  



  
  // {
  // 	"name": "StyleSheet Property name",
  // 	"scope": [
  // 		"support.type.property-name.css",
  // 		"support.type.property-name.scss",
  // 		"support.type.property-name.less",
  // 		"support.type.property-name.sass"
  // 	],
  // 	"settings": {
  // 		"foreground": "#abb2bf"
  // 	}
  // },
  {
    "name": "StyleSheet Property value",
    "scope": [
      "support.constant.css",
      "support.constant.scss",
      "support.constant.less",
      "support.constant.sass"
    ],
    "settings": {
      "foreground": "#98c379"
    }
  },
  {
    "name": "StyleSheet Variable",
    "scope": [
      "variable.css",
      "variable.scss",
      "variable.less",
      "variable.sass"
    ],
    "settings": {
      "foreground": "#56b6c2"
    }
  },
  {
    "name": "StyleSheet Variable String",
    "scope": [
      "variable.css.string",
      "variable.scss.string",
      "variable.less.string",
      "variable.sass.string"
    ],
    "settings": {
      "foreground": "#e5c07b"
    }
  },
  {
    "name": "StyleSheet Unit",
    "scope": [
      "unit.css",
      "unit.scss",
      "unit.less",
      "unit.sass"
    ],
    "settings": {
      "foreground": "#c678dd"
    }
  },
  {
    "name": "StyleSheet Function",
    "scope": [
      "function.css",
      "function.scss",
      "function.less",
      "function.sass"
    ],
    "settings": {
      "foreground": "#56b6c2"
    }
  },

  {
    "name": "Invalid",
    "scope": "invalid",
    "settings": {
      "foreground": "#F8F8F0"
    }
  },
  {
    "name": "Invalid deprecated",
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": "#F8F8F0"
    }
  },
  {
    "name": "JSON String",
    "scope": "structure.dictionary.property-nameon",
    "settings": {
      "foreground": "#56b6c2"
    }
  },
  {
    "name": "Link",
    "scope": "string.detected-link",
    "settings": {
      "foreground": "#61afef"
    }
  },
  {
    "name": "diff.header",
    "scope": [
      "meta.diff",
      "meta.diff.header"
    ],
    "settings": {
      "foreground": "#75715E"
    }
  },
  {
    "name": "diff.deleted",
    "scope": "markup.deleted",
    "settings": {
      "foreground": "#c678dd"
    }
  },
  {
    "name": "diff.inserted",
    "scope": "markup.inserted",
    "settings": {
      "foreground": "#e5c07b"
    }
  },
  {
    "name": "diff.changed",
    "scope": "markup.changed",
    "settings": {
      "foreground": "#e5c07b"
    }
  },
  {
    "scope": "constant.numeric.line-number.find-in-files - match",
    "settings": {
      "foreground": "#56b6c2A0"
    }
  },
  {
    "scope": "entity.name.filename.find-in-files",
    "settings": {
      "foreground": "#e5c07b"
    }
  },
  
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": "#6796e6"
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": "#cd9731"
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": "#f44747"
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": "#b267e6"
    }
  },
  


  // Comments
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  {
    "name": "Comment",
    "scope": [
      "comment",
      "string.comment",
      "punctuation.definition.comment"
    ],
    "settings": {
      "foreground": "#5F5F5F",
      "fontStyle": "italic"
    }
  },
  

  // Operators
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  {
    "name": ";",
    "scope": [
      "punctuation.terminator.statement",
      // "punctuation.separator.comma",
    ],
    "settings": {
      "foreground": "#5F5F5F",
      "fontStyle": "italic"
    }
  },
  
  {
    "name": "Assignment",
    "scope": [
      "keyword.operator.assignment",
      "keyword.operator.comparison",
      "keyword.operator.increment",
      "keyword.operator.decrement",
      "keyword.operator.arithmetic",
      "keyword.operator.relational",
      "keyword.operator.logical",
      "keyword.operator.spread",
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": "#ffe2a9"
    }
  },
  
  {
    "name": "Assignment",
    "scope": [
      "punctuation.separator.key-value",
      "keyword.operator.type.annotation"
    ],
    "settings": {
      "foreground": "#5F5F5F"
    }
  },

  // Flow Types, TS Types
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  
  {
    "name": "Flow Typedef",
    "scope": [
      "meta.type.flowtype", 
      "variable.other.flowtype",
      "meta.type.annotation"
    ],
    "settings": {
      "foreground": "#7F7F7F"
    }
  },
  {
    "name": "Flow Typedef",
    "scope": ["meta.object.flowtype"],
    "settings": {
      "foreground": "#91c5d3"
    }
  },
  {
    "name": "Flow Typedef",
    "scope": [
      "support.type.builtin.primitive",
      "support.type.primitive",
      "meta.return.type"
    ],
    "settings": {
      "foreground": "#7F7F7F"
    }
  },


  // JSX
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  {
    "name": "Tag name",
    "scope": [
      "meta.tag",
      "meta.tag.without-attributes",
      "support.class.component.open",
      "support.class.component.close"
    ],
    "settings": {
      "foreground": "#ffe2a9"
    }
  },
  
  {
    "name": "Tag Attrs",
    "scope": [
      "meta.tag.attributes",
    ],
    "settings": {
      "foreground": "#BDBDBD"
    }
  },
  
  // {
  // 	"name": "Tag children",
  // 	"scope": [
      
  // 		"entity.name.tag.open",
  // 		"entity.name.tag.close",
  // 		"entity.name.tag.class"
  //   ],
  // 	"settings": {
  // 		"foreground": "#d4d4d4"
  // 	}
  // },

  {
    "name": "Tag children",
    "scope": [
      "meta.jsx.children"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },

  // {
  // 	"name": "Tag attribute",
  // 	"scope": [
  //     "entity.other.attribute-name"
  //   ],
  // 	"settings": {
  // 		"foreground": "#BE936E"
  // 	}
  // },

  // JS Classes, Functions
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  {
    "name": "Decorators",
    "scope": [
      "variable.other.readwrite.decorator",
      "keyword.operator.decorator"
    ],
    "settings": {
      "foreground": "#f1a5ab"
    }
  },
  
  {
    "name": "Class Definitions",
    "scope": [
      "entity.name.type.class",
      "entity.other.inherited-class",
    ],
    "settings": {
      "foreground": "#f1a5ab"
    }
  },

  {
    "name": "Class Method Definitions",
    "scope": [
      // "meta.definition.property",
      "meta.definition.method",
      // "entity.name.function"
      "meta.class",
      "meta.method.declaration",
      "meta.field.declaration.function",
      
    ],
    "settings": {
      "foreground": "#f1a5ab"
    }
  },

  {
    "name": "Class Method Definitions",
    "scope": [
      // "meta.definition.property",
      "meta.type.declaration",
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  

  {
    "name": "Class meta",
    "scope": [
      "meta.class",
      "storage.modifier"
    ],
    "settings": {
      "foreground": "#7F7F7F"
    }
  },
  
  


  {
    "name": "Class method define",
    "scope": [
      "entity.name.function.method",
      "meta.function.arrow",
      "meta.function",
      "meta.arrow",
      "meta.field.declaration"
      // "meta.method.declaration",
      // "entity.name.function",
    ],
    "settings": {
      "foreground": "#f1a5ab"
    }
  },
  
  {
    "name": "Class props",
    "scope": [
      "meta.class"
      // "meta.field.declaration"
    ],
    "settings": {
      "foreground": "#6EC2F2"
    }
  },
  

  {
    "name": "Function name",
    "scope": [
      // "entity.name.function",
      "support.function"
    ],
    "settings": {
      "foreground": "#f1a5ab"
    }
  },

  {
    "name": "Function name",
    "scope": [
      // "entity.name.function",
      // "variable.parameter"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  

  {
    "name": "Function call example",
    "scope": [
      "meta.method-call.with-arguments",
      "meta.function-call",
      "meta.method-call",
      "meta.function-call.with-arguments",
      "entity.name.function-call",
      "meta.method-call.without-arguments",
      "support.function",
      "new.expr",
    ],
    "settings": {
      "foreground": "#ffe2a9"
    }
  },
  
  // Arguments, Variables, Constants
  // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  {
    "name": "Constants",
    "scope": [
      // "variable.other.constant",
      // "meta.definition.variable"
      "meta.var.expr"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  
  {
    "name": "Imports",
    "scope": [
      "meta.import",
      "meta.export.default",
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  
  {
    "name": "Async, Await",
    "scope": [
      "storage.modifier.async",
    ],
    "settings": {
      "foreground": "#7F7F7F"
    }
  },
  
  
  {
    "name": "Arguments",
    "scope": [
      "meta.function.parameters",
      "meta.parameters",
      "variable.parameter",
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  
  {
    "name": "Variable",
    "scope": [
      // "variable.other.readwrite",
      "variable.other.object",
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  
  {
    "name": "Source",
    "scope": [
      "variable.language"
    ],
    "settings": {
      "foreground": "red"
    }
  },
  
  {
    "name": "Source",
    "scope": [
      "source",
      "meta.block"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  },
  
  {
    "name": "this",
    "scope": [
      "variable.language.this"
    ],
    "settings": {
      "foreground": "#C597D4",
      "fontStyle": "italic"
    }
  },

  {
    "name": "Keyword",
    "scope": "keyword, storage.type, storage.type.function, variable.other.flowtype, storage.type.extends, storage.type.function, storage.type.class",
    "settings": {
      "foreground": "#7F7F7F"
    }
  },

  {
    "name": "Function Call",
    "scope": "variable.function, meta.class meta.group.braces.curly meta.function-call variable.function, variable.function.constructor",
    "settings": {
      "foreground": "#ffe2a9"
    }
  },
  {
    "name": "Function/Class Name",
    "scope": "meta.class entity.name.class, meta.class meta.function-call variable.function, source keyword.control.loop",
    "settings": {
      "foreground": "#f1a5ab"
    }
  },
  {
    "name": "Control Flow",
    "scope": "keyword.control.flow, keyword.control.trycatch, source meta.group.braces.curly keyword.control.loop, keyword.control.switch",
    "settings": {
      "foreground": "#f1a5ab"
    }
  },
  
  {
    "name": "Logic",
    "scope": "keyword.operator.logical",
    "settings": {
      "foreground": "#ffe2a9"
    }
  },
  {
    "name": "Comparison",
    "scope": "keyword.operator.comparison, keyword.operator.relational",
    "settings": {
      "foreground": "#f1a5ab"
    }
  },
  {
    "name": "String",
    "scope": "string.quoted, string.interpolated, string.template",
    "settings": {
      "foreground": "#AFD4AB"
    }
  },
  

]