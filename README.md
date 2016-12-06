<p align="center">
  <img width="100" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"/>
  <img width="100" src="http://cn.vuejs.org/images/logo.png"/>
</div>

# antd-vue

> Ant Design of Vue 2.x

* 基于 Vue 2.0 [Vue 2.0 中文文档](http://cn.vuejs.org/v2/guide/)
* 基于 Ant Design 2.4 [Ant Design (React 实现) 中文文档](https://ant.design/docs/react/introduce)
* 开发中，暂时不应用于生产环境

## 安装与引入

```bash
npm install antd-vue --save
```

```js
import {Alert, Icon} from 'antd-vue'

export default {
  components: {
    Alert,
    Icon
  }
}
```

## 目录结构

```
antd-vue/
|--build/              Webpack 配置文件
|--components/         组件
|  |--xxx/             xxx组件
|  |  |--demo/         组件用法示例
|  |  |--style/        组件样式
|  |  |--index.js      导出组件
|  |  |--xxx.vue       组件 .vue 文件
|  |  `--index.md      组件文档
|  |--_untils/         工具方法
|  `--style/           组件公共样式
|--dist/               编译文件
|  |--antd-vue.js      Build 的组件入口
|  `--main.js          Build 的 Demo 入口
`--src/                文档
```

## 组件

Navigation
* ~~Affix 固钉~~
* ~~BackTop 回到顶部~~
* ~~Breadcrumb 面包屑~~
* ~~Dropdown 下拉菜单~~
* ~~Menu导航菜单~~
* ~~Pagination 分页~~
* ~~Steps 步骤条~~
* ~~Tabs 标签页~~

Other
* ~~Anchor 锚点~~

General
* Button 按钮
* Icon 图标

Layout
* ~~Grid 栅格~~

Data Entry
* ~~AutoComplete 自动完成~~
* ~~Checkbox 多选框~~
* ~~Cascader 级联选择~~
* ~~DatePicker 日期选择框~~
* ~~Form 表单~~
* ~~Input 输入框~~
* ~~InputNumber 数字输入框~~
* ~~Mention 提及~~
* ~~Radio 单选框~~
* ~~Rate 评分~~
* ~~Select 选择器~~
* ~~Slider 滑动输入条~~
* ~~Switch 开关~~
* ~~TimePicker 时间选择框~~
* ~~Transfer 穿梭框~~
* ~~TreeSelect 树选择~~
* ~~Upload 上传~~

Data Display
* ~~Badge 徽标数~~
* ~~Card 卡片~~
* ~~Carousel 走马灯~~
* ~~Collapse 折叠面板~~
* ~~Calendar 日历~~
* ~~Popover 气泡卡片~~
* ~~Table 表格~~
* ~~Tag 标签~~
* ~~Timeline 时间轴~~
* ~~Tooltip 文字提示~~
* ~~Tree 树形控件~~

Feedback
* Alert 警告提示
* ~~Message 全局提示~~
* ~~Modal 对话框~~
* ~~Notification 通知提醒框~~
* ~~Popconfirm 气泡确认框~~
* ~~Progress 进度条~~
* ~~Spin 加载中~~

Localization
* ~~LocaleProvider 国际化~~

## 参考

* [FE-Driver/vue-beauty](https://github.com/FE-Driver/vue-beauty)
* [iview/iview](https://github.com/iview/iview)
* [airyland/vux](https://github.com/airyland/vux)