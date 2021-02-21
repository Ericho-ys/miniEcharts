const path = require("path")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //context: path.resolve(__dirname, './src'),
    entry: './src/main.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/js'),
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
          template: './index.html',
        })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, '../dist'),
      hot: true
  },
    module: {
        rules: [{
          test: /\.ts$/,
          use: ["babel-loader", "ts-loader"],
          exclude: [path.resolve(__dirname, "node_modules")]
        }]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            echarts: {
              chunks: 'initial',
              filename: 'js/echarts.min.js',
              test: /[\\/]echarts[\\/]/,
              priority: 1
            },
          }
        },
      }
}