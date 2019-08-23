#!/bin/bash
yarn init -y
yarn add react react-dom react-router-dom
yarn add @babel/core babel-loader @babel/polyfill @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties --dev
yarn add html-webpack-plugin css-loader style-loader url-loader webpack webpack-cli webpack-dev-server --dev
