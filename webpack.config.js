const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  entry: './src/scripts',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
})
