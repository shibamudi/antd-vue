<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import classNames from 'classnames'
  import { oneOf } from '../_utils/assist'

  export default {
    name: 'av-row',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['flex'])
        },
        required: false
      }
    },
    computed: {
      classes () {
        return classNames({
          'ant-row': !this.type,
          [`ant-row-${this.type}`]: this.type
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../style/index.less";
  @import "style/index.less";
</style>