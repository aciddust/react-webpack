const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const port = process.env.PORT || 8080;

module.exports = {
  // {'development' | 'production'}
  mode:'development',
  entry: ['@babel/polyfill', './src/js/index.js', './src/sass/main.scss'],
  output:{
    // 번들링 이후 배포경로
    path: path.resolve(__dirname, 'dist'),
    // 번들링 후 생성되는 파일에 해시 추가 (브라우저 캐싱문제 해결)
    filename: 'js/bundle.[hash].js'
  },
  module:{
    rules:[
      { // 1
        test:/\.js$/,
        exclude:/node_modules/,
        use:['babel-loader']
      },
      { // 2
        test: /\.scss$/,
        exclude:/node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader?outputStyle=expanded&indentedSyntax"
          // loader: 'sass-loader?outputStyle=compressed'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico' 없어서 주석처리함
    }),
    new webpack.ProvidePlugin({
        "React": "react",
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true
  }
};