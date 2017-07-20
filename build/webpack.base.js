const path = require('path')

const srcDir = path.resolve(__dirname, '../src')

module.exports = {
  entry: {
    app: [path.join(srcDir, 'index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: '[name].js',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  }
}
