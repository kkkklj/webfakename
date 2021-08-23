const path = require('path');
module.exports = {
  entry: './name.js',
  output: {
    filename: 'name.js',
    path: path.resolve(__dirname, 'dist')
  }
}