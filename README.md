#### 安装配置
node >= 10, npm >= 4
```shell script
$ npm install
```

#### 开发环境启动
```shell script
$ npm run serve
```

#### 修改请求url
./src/main.ts/
```javascript
baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_TITLE : 'http://127.0.0.1:3002'
// 本地serve 下，可修改./env.experiment 里面的url进行测试
```

#### 设置文件资源url
```javascript
// ./vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://127.0.0.1' : './',
  assetsDir: './',
  devServer: {
    disableHostCheck: true
  }
}
// 127.0.0.1
```

#### 上传资源到七牛cdn
更换./cdn.js里面的key secret,设置文件url 为七牛服务器
```shell script
// ./dist/*上传到服务器
$ node cdn
```


#### 打包（有需要可以分正式服测试服）
```shell script
$ npm run build

// 如果需要上传到七牛cdn
$ npm run build && node cdn
```
