# React Practice (from zero)

### Environment
* Ubuntu 18.04.2 Desktop
* VSCode
* npm 10.x

### Reference
* [React-Webpack-Babel](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
* [ESLint-Prettier](http://eddychang.me/react-native-eslint-prettier/)

#### 建立 npm 環境
```shell
$ mkdir react-zero && cd react-zero
$ npm init -y
```

#### 建立 index.html
```shell
$ mkdir dist && touch dist/index.html
```

#### 編輯 dist/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>The Minimal React Webpack Babel Setup</title>
</head>
<body>
  <div id="app"></div>
  <script src="./bundle.js"></script>
</body>
</html>
```

#### 安裝 Webpack
```shell
$ npm install --save-dev webpack webpack-dev-server webpack-cli
```
或是
```shell
$ npm i -D webpack webpack-dev-server webpack-cli
```

#### 調整 npm 的 package.json
在 script 區塊增加 npm start 的設定
<pre>
...
"scripts": {
  <b>"start": "webpack-dev-server --config ./webpack.config.js --mode development",</b>
  ...
},
...
</pre>

#### 新增 Webpack 設定檔
```shell
$ touch webpack.config.js
```
打開 webpack.config.js 增加以下內容
```js
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

#### 建立 React 程式碼資料夾
```shell
$ mkdir src
$ touch src/index.jsx
```
在 index.jsx 裡增加以下內容
```js
console.log('My Minimal React Webpack Babel Setup');
```

#### 設定 Babel 7
```shell
$ npm i -D @babel/core @babel/preset-env
```
#### 設定 Babel 支援 React, Webpack
```shell
$ npm i -D @babel/preset-react babel-loader
```

#### 修改設定讓 Webpack 能正確打包編譯
package.json
<pre>
...
"keywords": [],
"author": "",
"license": "ISC",
<b>"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
},</b>
"devDependencies": {
...
</pre>
webpack.config.js
<pre>
module.exports = {
  entry: './src/index.js',
  <b>module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },</b>
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
</pre>

#### 設定 Webpack + Babel 環境下的 React
```shell
$ npm i --save react react-dom
```
修改 src/index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
```

#### 增加 Webpack 的 React Hot Module Replacement
```shell
$ npm i -D react-hot-loader
```
修改 webpack.config.js
<pre>
<b>const Webpack = require('webpack');</b>

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  <b>plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],</b>
  devServer: {
    contentBase: './dist',
    <b>hot: true<b>
  }
};
</pre>

#### 修改 src/index.js
```js
// 在文件尾端加上
module.hot.accept();
```

#### 啟動 webpack-dev-server
```shell
$ npm start    # 網址預設是 http://localhost:8080/
```


## ESLint 設定

#### 安裝 eslint
```shell
$ npm i -D eslint eslint-plugin-import eslint-plugin-jsx-a11y 
```
安裝 babel 的 eslint 支援套件
```shell
$ npm i -D babel-eslint
```

#### 設定 eslint
```
$ npx eslint --init

? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser, Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
? What format do you want your config file to be in? JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-airbnb@latest
? Would you like to install them now with npm? Yes
```