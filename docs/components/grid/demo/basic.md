### 基础栅格

从堆叠到水平排列。

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

```html
<template>
  <div class="grid-basic">
    <av-row>
      <av-col :span="12">col-12</av-col>
      <av-col :span="12">col-12</av-col>
    </av-row>
    <av-row>
      <av-col :span="8">col-8</av-col>
      <av-col :span="8">col-8</av-col>
      <av-col :span="8">col-8</av-col>
    </av-row>
    <av-row>
      <av-col :span="6">col-6</av-col>
      <av-col :span="6">col-6</av-col>
      <av-col :span="6">col-6</av-col>
      <av-col :span="6">col-6</av-col>
    </av-row>
  </div>
</template>

<script>
  import { avRow, avCol } from 'antd-vue'

  export default {
    name: 'grid-basic',
    components: { avButton }
  }
</script>
```