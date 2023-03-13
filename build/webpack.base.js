const HTMLWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  entry: {
    // 单独给入口文件提供一个名称
    app: './src/index.tsx'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true // webpack5支持，dist自动清理, 旧版本方案为clean...插件
  },
  optimization: {
    // webpack4以上支持，默认抽离出node_modules, 单独打包
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './public/index.html'
    })
  ]
}
