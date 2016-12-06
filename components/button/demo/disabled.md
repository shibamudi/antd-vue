### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```html
<template>
  <div class="demo button-disabled">
    <av-button type="primary">Primary</av-button>
    <av-button type="primary" disabled>Primary(disabled)</av-button>
    <br>
    <av-button>Default</av-button>
    <av-button disabled>Default(disabled)</av-button>
    <br>
    <av-button type="ghost">Ghost</av-button>
    <av-button type="ghost" disabled>Ghost(disabled)</av-button>
    <br>
    <av-button type="dashed">Dashed</av-button>
    <av-button type="dashed" disabled>Dashed(disabled)</av-button>
  </div>
</template>

<script>
  import { avButton } from 'antd-vue'

  export default {
    name: 'button-disabled',
    components: { avButton }
  }
</script>
```