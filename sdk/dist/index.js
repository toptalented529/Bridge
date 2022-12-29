
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./inve-swap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./inve-swap-sdk.cjs.development.js')
}
