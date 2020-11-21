// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.jse$/i,
        use: 'raw-loader',
      },
    ],
  },

  context: __dirname,
  node: {
    __filename: true,
    __dirname: true,
  },

};
