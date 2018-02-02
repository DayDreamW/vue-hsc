# vue-hsc1

> A Vue.js project
基于vue+vue-cli+vue-router+axios+webpack开发的一款仿APPH5
css用的scss
请求接口用的axios
用localStorage做的缓存
ps:第一个vue项目，因为时间比较紧，所以主要精力放在了理清框架结构，接口请求数据，组件间传参和路由跳转，很多细节没有顾及到，还请多多包涵

#### 项目结构
│              
│
├─src
│  │  App.vue
│  │  main.js
│  │
│  ├─assets//图片文件夹
│  │      5a588295edb3e.png
│  │      arrow-back.png
│  │      arrow-backblack.png
│  │      arrow-right.png
│  │      background-color.png
│  │      big.png
│  │      card.png
│  │      cardActive.png
│  │      cardorang.png
│  │      detailbar.png
│  │      detailCont.png
│  │      fast.png
│  │      index.png
│  │      indexActive.png
│  │      loan.png
│  │      loanAcitve.png
│  │      logo.png
│  │      noProdust.png
│  │      personBackground.png
│  │      titleBar.png
│  │      tuji.png
│  │      whitewave.png
│  │
│  ├─components
│  │  │  Banner.vue //Banner轮播组件
│  │  │  Card.vue	//信用卡页面
│  │  │  CardList.vue //信用卡组件
│  │  │  detailTitleLline.vue //详情页标题栏
│  │  │  Example.vue //
│  │  │  FootNav.vue //底部导航栏组件
│  │  │  HeadBar.vue	//头部标题组件
│  │  │  HelloWorld.vue	//脚手架默认生成
│  │  │  ListTitle.vue	//信用卡页面分组标题栏组件
│  │  │  Loan.vue	// 借款页面
│  │  │  LoanContent.vue	//借款页面内容组件
│  │  │  LoanDetail.vue		//借款详情页面
│  │  │  Main.vue	//主页
│  │  │  MainList.vue	//主页借款产品列表内容组件
│  │  │  Mine.vue	//我的页面
│  │  │  NoProduct.vue	//产品未上架时的展示页面
│  │  │  ProductList.vue	//借贷产品列表组件
│  │  │  TitleBack.vue	// 带有返回按钮的标题栏组件
│  │  │
│  │  ├─card	//信用卡文件夹
│  │  │      AllBanks.vue	// 全部银行页面
│  │  │      BankOpen.vue	// 信用卡开卡页面
│  │  │      BankPurpose.vue	// 用途选卡组件
│  │  │      BankSelect.vue	// 选择银行组件
│  │  │      BankTheme.vue	// 银行选卡组件
│  │  │      line-title.vue	// 组件标题栏
│  │  │      MBankSelect.vue	// 部分银行组件
│  │  │      TodayProvide.vue	// 今日推荐组件
│  │  │
│  │  ├─login	
│  │  │      Login.vue	// 登录页面，本地存储应用localStorage
│  │  │
│  │  ├─main	
│  │  │      Bannder.vue	//主页轮播图组件，和信用卡页面结构相同，但因为接口返回数据类型不同轮播无法复用
│  │  │
│  │  └─mine	//
│  │          content.vue	//个人中心内容组件
│  │          investPeople.vue	//关于我们页面
│  │          lineItem.vue	//个人中心信息行
│  │          loginMine.vue		//登录成功后个人中心页面（不过这个好像没有用直接用了components文件夹里面的Mine组件）
│  │          personCard.vue	//个人资料页面
│  │
│  └─router
│          index.js	//页面路由
│
└─static

### 开始动手
* $ npm install -g vue-cli 
* $ vue init webpack vue-hsc1

```
? Project name vue-hsc1
? Project description vue-hsc1
? Author afei
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No
```

* $ cd vue-hsc1
* $ npm install
* $ npm run dev

等写完项目后 打包上线
* $ npm run build

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
