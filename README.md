

<p align="center">
  <img src="http://www.gocom.ai/imges/banner_font.png" 
  style="width: 400px; 
  -webkit-filter: drop-shadow(0 0 2px #a7a7a7) drop-shadow(0 0 15px #b9b9b9);
  margin-top: 100px;
  margin-bottom: 100px;
  ">
</p>

## XCom
- XCom = X(无限、未知) + Com(GoCom)

## 安装
```shell
npm install xcom -S
```

## 使用
``` javascript
import Vue from 'vue'
import xcom from 'xcom'

Vue.use(xcom)

// or
import {
  DepartmentPanel,
  PersonnelPanel,
  CheckXork,
  meetings
  // ...
} from 'xcom'

Vue.component(DepartmentPanel.name, DepartmentPanel)
Vue.component(PersonnelPanel.name, PersonnelPanel)
```

## 开发
###目录结构
    
    ├── build                      # 构建相关
    ├── examples                   # 示例页面
    ├── packages                   # 组件源码
    │   │── DepartmentPanel        # 部门组件
    │   │── PersonnelPanel         # 人员组件
    │   │── CheckXork              # 
    │   │── meetings               # 
    │   │── 
    ├── mock                       # 项目mock 模拟数据
    ├── plop-templates             # 基本模板
    ├── public                     # 静态资源
    │   │── favicon.ico            # favicon图标
    │   └── index.html             # html模板
    ├── src                        # 源代码
    │   ├── api                    # 所有请求
    │   ├── assets                 # 主题 字体等静态资源
    │   ├── components             # 全局公用组件
    │   ├── directive              # 全局指令
    │   ├── filters                # 全局 filter
    │   ├── icons                  # 项目所有 svg icons
    │   ├── lang                   # 国际化 language
    │   ├── layout                 # 全局 layout
    │   ├── router                 # 路由
    │   ├── store                  # 全局 store管理
    │   ├── styles                 # 全局样式
    │   ├── utils                  # 全局公用方法
    ├── tests                      # 测试
    ├── .babelrc                   # babel-loader 配置
    ├── vue.config.js              # vue-cli 配置
    └── package.json               # package.json




## 浏览器兼容
Modern browsers and Internet Explorer 10+.

## Links
  - [伽信智科](http://www.gocom.ai/)
  
## LICENSE
[MIT](LICENSE)
