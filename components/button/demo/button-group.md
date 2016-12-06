### 按钮组合

可以将多个 `Button` 放入 `Button.Group` 的容器中。

通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

```html
<template>
  <div class="demo button-group">
    <h4>Basic</h4>
    <av-button-group>
      <av-button>Cancel</av-button>
      <av-button type="primary">OK</av-button>
    </av-button-group>
    <av-button-group>
      <av-button disabled>L</av-button>
      <av-button disabled>M</av-button>
      <av-button disabled>R</av-button>
    </av-button-group>
    <av-button-group>
      <av-button type="primary">L</av-button>
      <av-button>M</av-button>
      <av-button type="ghost">M</av-button>
      <av-button type="dashed">R</av-button>
    </av-button-group>

    <h4>With Icon</h4>
    <av-button-group>
      <av-button type="primary">
        <av-icon type="left"></av-icon>Go back
      </av-button>
      <av-button type="primary">
        Go forward<av-icon type="right"></av-icon>
      </av-button>
    </av-button-group>
    <av-button-group>
      <av-button type="primary" icon="cloud"></av-button>
      <av-button type="primary" icon="cloud-download"></av-button>
    </av-button-group>
  </div>
</template>

<script>
  import { avButton, avButtonGroup } from 'antd-vue'

  export default {
    name: 'button-disabled',
    components: { avButton }
  }
</script>
```