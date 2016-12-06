### 四种样式

共有四种样式 `success`、`info`、`warning`、`error`。

```html
<template>
  <div class="alert-style">
    <avAlert type="success">Success Text</avAlert>
    <avAlert type="info">Info Text</avAlert>
    <avAlert type="warning">Warning Text</avAlert>
    <avAlert type="error">Error Text</avAlert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'

  export default {
    name: 'alert-style',
    components: { avAlert }
  }
</script>
```