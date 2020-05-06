const colors = require('./dark_colors')
const editor_colors = require('./dark_editor')
const functions = require('./dark_functions')
const vars = require('./dark_vars')
const unsorted = require('./dark_unsorted')

const theme = {
  type: 'dark',
  colors: editor_colors,
  tokenColors: [
    ...unsorted,
    ...functions,
    ...vars,
    // ...jsx,
    // ...css,
    // ...json,
  ]
}

module.exports = JSON.stringify(
  theme,
  null,
  2
)