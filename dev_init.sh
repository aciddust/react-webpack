#!/bin/bash
yarn init -y
# react 관련 패키지
yarn add react react-dom react-router-dom
# babel 관련 패키지
yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties --dev
# babel 관련 패키지, Promise같이 대체 불가능한 기능에 대해 변환해줌.
# 배포 이후에도 적용되야하기 때문에 --dev 옵션 빼고 설치
yarn add @babel/polyfill
# webpack 관련 패키지
yarn add html-webpack-plugin css-loader mini-css-extract-plugin node-sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server --dev