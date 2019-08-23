const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//css파일 별도 추출을 위한 플러그인.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const port = process.env.PORT || 8080;

module.exports = {
  // {'development' | 'production'}
  // 개발지향모드 | 배포지향모드
  mode:'development',
  // 번들링 시작지점.
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
        use:['babel-loader'] // babel로 ES6<= to ES5 변환(컴파일)
      },
      { // 2
        test: /\.scss$/,
        exclude:/node_modules/,
        use: [
          MiniCssExtractPlugin.loader, // 별도 css 추출
          "css-loader",
          "sass-loader?outputStyle=expanded&indentedSyntax"
          // loader: 'sass-loader?outputStyle=compressed'
        ]
      }
    ]
  },
  // 번들링중 오류 발생지점을 trace 해서 알려줌.
  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      // 사용하려는 html 문서를 output path로 이동시켜주는 역할을 함.
      template: 'public/index.html',
      // favicon: 'public/favicon.ico' 없어서 주석처리함
    }),
    new webpack.ProvidePlugin({
      // 명시된 모듈들을 알아서 불러와주는 역할을 함.
      // 이 경우에는 react 모듈을 불러오게 하였음.
      "React": "react",
    }),
    new MiniCssExtractPlugin({
      // scss에서 추출하여 css 따로 저장.
      filename: 'css/style.css'
    })
  ],
  devServer: {
    host: 'localhost', // 호스트 주소
    port: port, // 포트번호
    open: true, // 브라우저 자동 열기
    historyApiFallback: true // 브라우저의 URL 변경을 허용할지 여부
  }
};