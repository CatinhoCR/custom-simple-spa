/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  /* Manage source maps generation process. Refer to https://webpack.js.org/configuration/devtool/#production */
  devtool: false,

  /* Optimization configuration */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  /* Performance treshold configuration values */
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  /* Additional plugins configuration */
  plugins: [],
});


// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const { merge } = require('webpack-merge')

// const paths = require('./paths')
// const common = require('./webpack.common')

// module.exports = merge(common, {
//   mode: 'production',
//   devtool: false,
//   output: {
//     path: paths.build,
//     publicPath: '/',
//     filename: 'js/[name].[contenthash].bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(sass|scss|css)$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 2,
//               sourceMap: false,
//               modules: false,
//             },
//           },
//           'postcss-loader',
//           'sass-loader',
//         ],
//       },
//     ],
//   },
//   plugins: [
//     // Extracts CSS into separate files
//     new MiniCssExtractPlugin({
//       filename: 'styles/[name].[contenthash].css',
//       chunkFilename: '[id].css',
//     }),
//   ],
//   optimization: {
//     minimize: true,
//     minimizer: [new CssMinimizerPlugin(), '...'],
//     runtimeChunk: {
//       name: 'runtime',
//     },
//   },
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000,
//   },
// })