# f7vtest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1、拷贝framework7\kitchen-sink\vue\src中所有内容到 src  
2、拷贝framework7\kitchen-sink\vue 中除src之外所有内容到 public   
3、修改 src 中app.js -> main.js  
4、拷贝 node_modules\framework7\css\framework7.min.css 到 public\css  
5、修改 public\index.html framework7.min.css 路径为正确路径
此时 执行npm run serve 显示应该已经正确。 但npm run build 后直接打开www中的index.html显示不正确。

在根目录中添加文件 vue.config.js 写入内容 
```
module.exports = {
	baseUrl: "./"
}
```
再次执行 npm run build ，直接打开www中的index.html显示应当已经正常。至此framework7-vue环境配置完成。

## cordova 
去另外一个目录，用命令创建一个Cordova工程，像这样
```
cordova create test
```
然后去test目录把里面所有内容拷贝到f7vtest目录中，有相同文件的跳过，应该是 package.josn   
然后在命令行中切换到 f7vtest ，执行 npm run build ,之后 cordova platform add android ，接着 cordova build。如果cordova 所需环境都已经配置正确，稍等片刻就会输出打包成功的 apk 路径。

