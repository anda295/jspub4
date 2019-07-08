const path = require("path");

module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: "./src/index.js",

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
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
        include: path.resolve(__dirname, "src"),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.module\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /^((?!\.module).)*css$$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../prod/fonts/',
            publicPath: '../../prod/fonts/'
          }
        }]
      }
    ]
  },
  mode: "development"
};
