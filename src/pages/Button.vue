<template>
  <div class="button">
    <markdown file="components/button/index.md"></markdown>

    <div class="demo button-basic">
      <div class="example">
        <av-button type="primary">Primary</av-button>
        <av-button>Default</av-button>
        <av-button type="ghost">Ghost</av-button>
        <av-button type="dashed">Dashed</av-button>
      </div>
      <markdown file="components/button/demo/basic.md"></markdown>
    </div>

    <div class="demo button-icon">
      <div class="example">
        <av-button type="primary" shape="circle" icon="search"></av-button>
        <av-button type="primary" icon="search">Search</av-button>
        <av-button shape="circle" icon="search"></av-button>
        <av-button icon="search">Search</av-button>
        <br>
        <av-button type="ghost" shape="circle-outline" icon="search"></av-button>
        <av-button type="ghost" icon="search">Search</av-button>
        <av-button type="dashed" shape="circle-outline" icon="search"></av-button>
        <av-button type="dashed" icon="search">Search</av-button>
      </div>
      <markdown file="components/button/demo/icon.md"></markdown>
    </div>

    <div class="demo button-size">
      <div class="example">
        <av-button type="primary" size="large">Large</av-button>
        <av-button type="primary">Default</av-button>
        <av-button type="primary" size="small">Small</av-button>
      </div>
      <markdown file="components/button/demo/size.md"></markdown>
    </div>

    <div class="demo button-disabled">
      <div class="example">
        <av-button type="primary">Primary</av-button>
        <av-button type="primary" disabled>Primary(disabled)</av-button>
        <br>
        <av-button>Default</av-button>
        <av-button disabled>Default(disabled)</av-button>
        <br>
        <av-button type="ghost">Ghost</av-button>
        <av-button type="ghost" disabled>Ghost(disabled)</av-button>
        <br>
        <av-button type="dashed">Dashed</av-button>
        <av-button type="dashed" disabled>Dashed(disabled)</av-button>
      </div>
      <markdown file="components/button/demo/disabled.md"></markdown>
    </div>

    <div class="demo button-loading">
      <div class="example">
        <av-button type="primary" loading>Loading</av-button>
        <av-button type="primary" size="small" loading>Loading</av-button>
      </div>
      <markdown file="components/button/demo/loading.md"></markdown>
    </div>

    <div class="demo button-group">
      <div class="example">
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
      <markdown file="components/button/demo/button-group.md"></markdown>
    </div>
  </div>
</template>

<script>
  import { avButton, avButtonGroup, avIcon } from '../../components'
  import markdown from '../components/Markdown.vue'

  export default {
    name: 'button',
    components: { avButton, avButtonGroup, avIcon, markdown }
  }
</script>

<style scoped>
  .example .ant-btn {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .example .ant-btn-group {
    margin-right: 8px;
  }
  .example .ant-btn-group > .ant-btn {
    margin-right: 0;
  }
</style>