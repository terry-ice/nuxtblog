##项目介绍
* 我的新博客吧啦啦啦
* 技术栈vue,nuxt,express,sass,ssr

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
### server. 源码上传及build
```bash
    //先执行yarn安装依赖包
    yarn
    //然后执行yarn build运行构建
    yarn build
    //然后通过pm2启动生产服务器
    pm2 start npm --name "my-blog" -- run start
    //可以通过pm2查看服务器状态及运行日志
    pm2 show web
    pm2 logs web
```
For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
