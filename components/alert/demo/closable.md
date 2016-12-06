### 可关闭的警告提示

显示关闭按钮，点击可关闭警告提示。

```html
<template>
  <div class="alert-closable">
    <avAlert type="warning" closable>
      Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text
    </avAlert>
    <avAlert type="error" closable>
      Error Text
      <span slot="description">Error Description Error Description Error Description Error Description Error Description Error Description</span>
    </avAlert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'

  export default {
    name: 'alert-closable',
    components: { avAlert }
  }
</script>
```
