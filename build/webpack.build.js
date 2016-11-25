var config = require('./webpack.config.js')

config.entry = {
  'duiba-design': './src/index.js'
}

config.output = {
  filename: './dist/[name].js',
  library: 'DuibaDesign',
  libraryTarget: 'umd'
}

module.exports = config
