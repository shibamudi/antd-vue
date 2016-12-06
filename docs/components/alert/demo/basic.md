### 基本

最简单的用法，适用于简短的警告提示。


````html
<template>
  <div class="alert-basic">
    <av-alert type="success">Success Text</av-alert>
  </div>
</template>

<script>
  import { avAlert } from 'antd-vue'
  
  export default {
    name: 'alert-basic',
    components: { avAlert }
  }
</script>
````
