### 图标

可口的图标让信息类型更加醒目。

```html
<template>
  <div class="alert-icon">
    <avAlert type="success" showIcon>Success Tips</avAlert>
    <avAlert type="info" showIcon>Informational Notes</avAlert>
    <avAlert type="warning" showIcon>Warning</avAlert>
    <avAlert type="error" showIcon>Error</avAlert>
    <avAlert type="success" showIcon>
      Success Tips
      <span slot="description">Detailed description and advices about successful copywriting.</span>
    </avAlert>
    <avAlert type="info" showIcon>
      Informational Notes
      <span slot="description">Additional description and informations about copywriting.</span>
    </avAlert>
    <avAlert type="warning" showIcon>
      Warning
      <span slot="description">This is a warning notice about copywriting.</span>
    </avAlert>
    <avAlert type="error" showIcon>
      Error
      <span slot="description">his is an error message about copywriting.</span>
    </avAlert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'

  export default {
    name: 'alert-icon',
    components: { avAlert }
  }
</script>
```
