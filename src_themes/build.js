const fs = require('fs')
const dark = require('./dark/dark')

fs.writeFileSync(
  './themes/focus-dark-color-theme.json',
  dark
)
