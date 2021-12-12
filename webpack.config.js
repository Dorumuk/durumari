const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require("dotenv");

// const isDevMode = process.env.NODE_ENV.includes('dev');
// // 개발,배포 모든 모드에서 사용되는 Webpack 플러그인 목록(배열)
// const plugins = [
//   new webpack.EnvironmentPlugin({
//     NODE_ENV: "development",
//   }),
// ]

// // 배포 모드인 경우 plugins에 배포용 플러그인 추가
// if (!isDevMode) {
//   plugins.push(
//     new MiniCssExtractPlugin({
//       linkType: false,
//       filename: '[name].[contenthash].css',
//       chunkFilename: '[id].[contenthash].css',
//     })
//   )
// }

module.exports = (env) => {
  const isDevMode = env.NODE_ENV.includes('dev');

  console.log("dev mode:: ",isDevMode);
  if (isDevMode) {
    dotenv.config({path: './dev.env'}); // setting environment variable
  } else {
    dotenv.config({path: './.env'}); // setting environment variable
  }
  console.log(process.env.API_SERVER);
  return {
    entry: './src/app.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /[\.js]$/,
          exclude: /node_module/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            isDevMode ? "style-loader" : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ],
          exclude: /node_modules/
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      // new webpack.EnvironmentPlugin({
      //   NODE_ENV: 'development',
      // }),
      new CleanWebpackPlugin({
        dry: true, // default value: false
        verbose: true, // default value: false
        // cleanOnceBeforeBuildPatterns 기본 값: ['**/*']
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          // build 폴더 안의 모든 것을 지우도록 설정
          path.resolve(process.cwd(), 'build/**/*')
        ]
      }),
      new HtmlWebpackPlugin({
        template: "./index.html", // 템플릿 위치
      }),
      new MiniCssExtractPlugin(),
    ],
    devServer: {
      host: "localhost", // live-server host 및 port
      port: 5500,
    },
    mode: "development", // 번들링 모드 development / production
  };
}