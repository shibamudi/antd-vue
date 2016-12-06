<template>
  <div class="markdown">
    <av-button
      type="ghost" shape="circle-outline" icon="up"
      className="code-btn code-btn-hide"
      v-if="showCode"
      @onClick="clickHideCode"
    ></av-button>
    <av-button
      type="ghost" shape="circle-outline" icon="down"
      className="code-btn code-btn-show"
      v-else
      @onClick="clickShowCode"
    ></av-button>
    <div
      class="markdown-body"
      v-html="compiledMarkdown"
      :class="{ 'show-code': showCode }"
    ></div>
  </div>
</template>

<script>
  import { avButton } from '../../components'

  export default {
    name: 'markdown',
    components: { avButton },
    props: {
      file: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        compiledMarkdown: require('html!markdown!../../' + this.file),
        showCode: false
      }
    },
    methods: {
      clickShowCode: function () {
        this.showCode = true
      },
      clickHideCode: function () {
        this.showCode = false
      }
    }
  }
</script>

<style>
  @import "../assets/github-markdown.css";

  .markdown .ant-btn.code-btn {
    display: none;
  }
  .demo .markdown {
    position: relative;
  }
  .demo .markdown .code-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    z-index: 10;
  }
  .demo .markdown-body {
    padding-right: 60px;
  }
  .demo .markdown-body pre {
    display: none;
    margin-right: -40px;
  }
  .demo .markdown-body.show-code pre {
    display: block;
  }
</style>