### 加载中状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

```html
<template>
  <div class="demo button-loading">
    <av-button type="primary" shape="circle" icon="search"></av-button>
    <av-button type="primary" icon="search">Search</av-button>
    <av-button shape="circle" icon="search"></av-button>
    <av-button icon="search">Search</av-button>
    <br>
    <av-button type="ghost" shape="circle-outline" icon="search"></av-button>
    <av-button type="ghost" icon="search">Search</av-button>
    <av-button type="dashed" shape="circle-outline" icon="search"></av-button>
    <av-button type="dashed" icon="search">Search</av-button>
  </div>
</template>

<script>
  import { avButton } from 'antd-vue'

  export default {
    name: 'button-loading',
    components: { avButton }
  }
</script>
```