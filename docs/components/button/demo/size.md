### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

```html
<template>
  <div class="demo button-size">
    <av-button type="primary" size="large">Large</av-button>
    <av-button type="primary">Default</av-button>
    <av-button type="primary" size="small">Small</av-button>
  </div>
</template>

<script>
  import { avButton } from 'antd-vue'

  export default {
    name: 'button-size',
    components: { avButton }
  }
</script>
```