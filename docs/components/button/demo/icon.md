### 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

```html
<template>
  <div class="demo button-icon">
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
    name: 'button-icon',
    components: { avButton }
  }
</script>
```