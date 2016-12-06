### 自定义关闭

可以自定义关闭，自定义的文字会替换原先的关闭 `Icon`。

```html
<template>
  <div class="alert-close-text">
    <avAlert type="info">
      Info Text
      <span slot="closeText">Close Now</span>
    </avAlert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'

  export default {
    name: 'alert-close-text',
    components: { avAlert }
  }
</script>
```
