const path = require('path');

module.exports = {
    entry: './lib/commonjs/comb.js',
    mode: 'development',
    output: {
      filename: 'comb.js',      
      path: path.resolve(__dirname, 'src/dist'),
    },
  };