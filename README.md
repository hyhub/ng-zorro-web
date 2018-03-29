# SupplyWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---
### 附1.
[Angular CLI](https://github.com/angular/angular-cli/wiki)构建工具命令:  
- 首先使用npm安装cli工具  
```
npm install -g @angular/cli
```
- 创建一个项目
```
ng new eshop
```
创建组件/服务/路由等文件,默认创建到app文件夹下.如果创建到app指定目录下直接写路径即可,如:```ng g component shared/product```,这里```g```是generate的缩写形式.以下代码中```ng generate```等效于```ng g```.    
- 运行项目 
```
ng serve  
```
注意编译或者运行时要启用压缩文件,也就是uglifying and tree-shaking特性时
加上控制参数```--prod```,如:```ng build --prod``` or ```ng serve --prod```
- 创建一个组件
```
ng g component product  
# 注意:生成的组件名称自动首字母大写,且带Component后缀
```
- 创建一个服务 
```
ng g service product # 注意:生成的服务名带Service后缀,创建到指定目录下同上.
```
- 创建一个路由模块
```
ng new --routing #注意这里是new命令,也可自己声明路由配置文件.
```
- 创建一个路由守卫服务
```
ng g guard permission
```
- 创建一个模块
```
ng g module permission
```
- 创建一个管道
```
ng g pipe validate 
```
- 创建一个指令
```
ng g directive umeditor
```
除此之外还有创建class,enum,interface的命令,基本上手写,就省略了..  
每一个ng generate [name]命令都有着更精细的控制参数,可在这里查看[ng generate](https://github.com/angular/angular-cli/wiki/generate)

### 运行项目  
```
npm run start # 或npm start 或 ng serve
