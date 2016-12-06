<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import classNames from 'classnames'

  export default {
    name: 'av-col',
    props: {
      span: {
        type: Number,
        required: true
      }
    },
    computed: {
      classes () {
        return classNames({
          [`ant-col-${this.span}`]: this.span !== undefined
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../style/index.less";
  @import "style/index.less";
</style>