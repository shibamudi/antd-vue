### 按钮类型

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

```html
<template>
  <div class="button-basic">
    <av-button type="primary">Primary</av-button>
    <av-button>Default</av-button>
    <av-button type="ghost">Ghost</av-button>
    <av-button type="dashed">Dashed</av-button>
  </div>
</template>

<script>
  import { avButton } from 'antd-vue'

  export default {
    name: 'button-basic',
    components: { avButton }
  }
</script>
```