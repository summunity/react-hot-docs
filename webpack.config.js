var path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/component.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jse$/i,
        use: 'raw-loader',
        // use: {
        //   loader: 'raw-loader',
        //   options: {
        //     presets: ['env']
        //   }
        // }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          loader: require.resolve('url-loader'),
          options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
          },
      },
      {
          test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
          loader: require.resolve('file-loader'),
          options: {
              name: 'static/media/[name].[hash:8].[ext]',
          },
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
      }
    ]
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },

  externals: {
    'react': 'commonjs react'
  }
};
