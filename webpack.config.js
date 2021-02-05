const path = require("path")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './index.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: 'echarts.min.js'
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['ts-loader'],
            exclude: /node_modules/
        }]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            echarts: {
              chunks: 'initial',
              filename: 'echarts.min.js',
              test: /[\\/]echarts[\\/]/,
              priority: 1
            },
          }
        },
      }
}