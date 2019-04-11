const Webpack = require('webpack');
const Path = require('path');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react',
            { plugins: ['@babel/plugin-proposal-class-properties'] },
          ],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: Path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
