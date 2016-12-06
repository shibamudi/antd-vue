<template>
  <div class="grid">
    <markdown file="docs/components/grid/index.md"></markdown>

    <div class="demo grid-demo grid-basic">
      <div class="example code-box-demo">
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
      <markdown file="docs/components/grid/demo/basic.md"></markdown>
    </div>
  </div>
</template>

<script>
  import Markdown from '../components/Markdown.vue'
  import { avRow, avCol } from '../../components/grid'

  export default {
    name: 'grid',
    components: { Markdown, avRow, avCol }
  }
</script>

<style>
  .grid-demo .demo-row, [id^="components-grid-demo-"] .demo-row, .grid-demo .code-box-demo .demo-row, [id^="components-grid-demo-"] .code-box-demo .demo-row {
    background-image: linear-gradient(90deg, rgb(245, 245, 245) 4.16667%, transparent 4.16667%, transparent 8.33333%, rgb(245, 245, 245) 8.33333%, rgb(245, 245, 245) 12.5%, transparent 12.5%, transparent 16.6667%, rgb(245, 245, 245) 16.6667%, rgb(245, 245, 245) 20.8333%, transparent 20.8333%, transparent 25%, rgb(245, 245, 245) 25%, rgb(245, 245, 245) 29.1667%, transparent 29.1667%, transparent 33.3333%, rgb(245, 245, 245) 33.3333%, rgb(245, 245, 245) 37.5%, transparent 37.5%, transparent 41.6667%, rgb(245, 245, 245) 41.6667%, rgb(245, 245, 245) 45.8333%, transparent 45.8333%, transparent 50%, rgb(245, 245, 245) 50%, rgb(245, 245, 245) 54.1667%, transparent 54.1667%, transparent 58.3333%, rgb(245, 245, 245) 58.3333%, rgb(245, 245, 245) 62.5%, transparent 62.5%, transparent 66.6667%, rgb(245, 245, 245) 66.6667%, rgb(245, 245, 245) 70.8333%, transparent 70.8333%, transparent 75%, rgb(245, 245, 245) 75%, rgb(245, 245, 245) 79.1667%, transparent 79.1667%, transparent 83.3333%, rgb(245, 245, 245) 83.3333%, rgb(245, 245, 245) 87.5%, transparent 87.5%, transparent 91.6667%, rgb(245, 245, 245) 91.6667%, rgb(245, 245, 245) 95.8333%, transparent 95.8333%);
    margin-bottom: 8px;
    overflow: hidden;
  }

  .grid-demo .ant-row .demo-col, [id^="components-grid-demo-"] .ant-row .demo-col, .grid-demo .code-box-demo .ant-row .demo-col, [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 18px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 30px 0px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
  }

  .grid-demo .ant-row > div, [id^="components-grid-demo-"] .ant-row > div, .grid-demo .code-box-demo .ant-row > div, [id^="components-grid-demo-"] .code-box-demo .ant-row > div, .grid-demo .ant-row-flex > div, [id^="components-grid-demo-"] .ant-row-flex > div, .grid-demo .code-box-demo .ant-row-flex > div, [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div {
    text-align: center;
    min-height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: rgb(255, 255, 255);
    padding: 5px 0px;
    border-radius: 0px;
  }

  .grid-demo .ant-row .demo-col-1, [id^="components-grid-demo-"] .ant-row .demo-col-1, .grid-demo .ant-row .demo-col-1, [id^="components-grid-demo-"] .ant-row .demo-col-1 {
    background: rgba(0, 160, 233, 0.701961);
  }

  .grid-demo .ant-row .demo-col-2, [id^="components-grid-demo-"] .ant-row .demo-col-2, .grid-demo .code-box-demo .ant-row .demo-col-2, [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-2 {
    background: rgba(0, 160, 233, 0.498039);
  }

  .grid-demo .ant-row .demo-col-3, [id^="components-grid-demo-"] .ant-row .demo-col-3, .grid-demo .code-box-demo .ant-row .demo-col-3, [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-3 {
    color: rgb(153, 153, 153);
    background: rgba(255, 255, 255, 0.2);
  }

  .grid-demo .ant-row .demo-col-4, [id^="components-grid-demo-"] .ant-row .demo-col-4, .grid-demo .code-box-demo .ant-row .demo-col-4, [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-4 {
    background: rgba(0, 160, 233, 0.6);
  }

  .grid-demo .ant-row .demo-col-5, [id^="components-grid-demo-"] .ant-row .demo-col-5, .grid-demo .code-box-demo .ant-row .demo-col-5, [id^="components-grid-demo-"] .code-box-demo .ant-row .demo-col-5 {
    color: rgb(153, 153, 153);
    background: rgba(255, 255, 255, 0.498039);
  }

  .grid-demo .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1), [id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row):nth-child(2n+1), .grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1), [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1) {
    background: rgba(0, 160, 233, 0.701961);
  }

  .grid-demo .code-box-demo .ant-row > div:not(.gutter-row), [id^="components-grid-demo-"] .code-box-demo .ant-row > div:not(.gutter-row), .grid-demo .code-box-demo .ant-row-flex > div:not(.gutter-row), [id^="components-grid-demo-"] .code-box-demo .ant-row-flex > div:not(.gutter-row) {
    background: rgb(0, 160, 233);
    padding: 16px 0px;
  }
</style>