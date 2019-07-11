const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true,
            quiet: true
          }
        }]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            limit: 8000, // Convert images < 8kb to base64 strings
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    // new CopyWebpackPlugin([{
    //   from: './assets',
    //   to: 'assets/images'
    // }])
  ],
  mode: 'development'
};
