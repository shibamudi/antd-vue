### 含有辅助性文字介绍

含有辅助性文字介绍的警告提示。

```html
<template>
  <div class="alert-description">
    <avAlert type="success">
      Success Text
      <span slot="description">Success Description Success Description Success Description</span>
    </avAlert>
    <avAlert type="info">
      Info Text
      <span slot="description">Info Description Info Description Info Description Info Description</span>
    </avAlert>
    <avAlert type="warning">
      Warning Text
      <span slot="description">Warning Description Warning Description Warning Description Warning Description</span>
    </avAlert>
    <avAlert type="error">
      Error Text
      <span slot="description">Error Description Error Description Error Description Error Description</span>
    </avAlert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'

  export default {
    name: 'alert-description',
    components: { avAlert }
  }
</script>
```