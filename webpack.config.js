const path = require("path")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    //context: path.resolve(__dirname, './src'),
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        library: 'miniechart'
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js']
    },
    //devtool: 'eval-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
  //   devServer: {
  //     contentBase: path.resolve(__dirname, '../dist'),
  //     hot: true
  // },
    module: {
        rules: [{
          test: /\.ts$/,
          use: ["babel-loader", "ts-loader"],
          exclude: [path.resolve(__dirname, "node_modules")]
        }]
    },
    // optimization: {
    //     splitChunks: {
    //       cacheGroups: {
    //         echarts: {
    //           chunks: 'initial',
    //           filename: 'echarts.min.js',
    //           test: /[\\/]echarts[\\/]/,
    //           priority: 1
    //         },
    //         common:{
    //           chunks: 'all',
    //           filename:'common.js'
    //         }
    //       }
    //     },
    //   }
}