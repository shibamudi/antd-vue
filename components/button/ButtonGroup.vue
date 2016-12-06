<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import classNames from 'classnames'
  import { oneOf } from '../_utils/assist'

  export default {
    name: 'av-button-group',
    props: {
      size: {
        validator (value) {
          return oneOf(value, ['large', 'small'])
        },
        required: false
      },
      className: {
        type: String,
        required: false
      }
    },
    computed: {
      classes () {
        return classNames({
          'ant-btn-group': true,
          [`ant-btn-group-${({large: 'lg', small: 'sm'})[this.size] || ''}`]: oneOf(this.size, ['large', 'small']),
          [this.className]: this.className
        })
      }
    },
    beforeMount: function () {
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.$slots.default[i].text === ' ') {
          this.$slots.default.splice(i, 1)
        }
      }
    },
    updated: function () { // TODO 还是太复杂了点
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.$slots.default[i].text === ' ') {
          this.$mount()
          return
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../style/index.less';
  @import './style/index.less';
</style>
