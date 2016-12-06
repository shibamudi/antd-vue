### 顶部公告

用作顶部公告时，默认有图标，`type` 为 'warning'，并有特殊样式。

```html
<template>
  <div class="alert-banner">
    <avAlert banner>Warning text</avAlert>
    <br>
    <avAlert banner closable>Very long warning text warning text text text text text text text</avAlert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'

  export default {
    name: 'alert-banner',
    components: { avAlert }
  }
</script>
```
