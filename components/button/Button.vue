<template>
  <button
    :type="htmlType"
    :class="classes"
    @click="handleClick()"
  >
    <av-icon :type="iconType" v-if="iconType"></av-icon>
    <slot></slot>
  </button>
</template>

<script>
  import classNames from 'classnames'
  import { oneOf } from '../_utils/assist'
  import avIcon from '../icon'

  export default {
    name: 'av-button',
    components: { avIcon },
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['primary', 'ghost', 'dashed'])
        },
        required: false
      },
      htmlType: {
        validator (value) {
          return oneOf(value, ['submit', 'button', 'reset'])
        },
        default: 'button'
      },
      icon: {
        type: String,
        required: false
      },
      shape: {
        validator (value) {
          return oneOf(value, ['circle', 'circle-outline'])
        },
        required: false
      },
      size: {
        validator (value) {
          return oneOf(value, ['large', 'default', 'small'])
        },
        default: 'default'
      },
      loading: {
        type: Boolean,
        default: false
      },
      className: {
        type: String,
        required: false
      }
    },
    data: function () {
      return {
//        iconType: this.loading ? 'loading' : this.icon,
//        ？？？？ data 与 computed 有啥区别？
        isClicked: false,
        timeout: null,
        clickedTimeout: null
      }
    },
    computed: {
      iconType () {
        return this.loading ? 'loading' : this.icon
      },
      classes () {
        return classNames({
          'ant-btn': true,
          [`ant-btn-${this.type}`]: this.type,
          [`ant-btn-${this.shape}`]: this.shape,
          [`ant-btn-${({large: 'lg', small: 'sm'})[this.size] || ''}`]: oneOf(this.size, ['large', 'small']),
          [`ant-btn-icon-only`]: !this.$slots.default && this.iconType,
          [`ant-btn-loading`]: this.loading,
          [this.className]: this.className,
          [`ant-btn-clicked`]: this.isClicked
        })
      }
    },
    methods: {
      handleClick: function () {
        this.isClicked = false
        this.clickedTimeout = setTimeout(() => { this.isClicked = true }, 10)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => { this.isClicked = false }, 500)
        this.$emit('onClick')
      }
      // TODO chrome 中点击之后 :focus 状态没有自动移除
    },
    beforeDestroy: function () {
      if (this.clickedTimeout) {
        clearTimeout(this.clickedTimeout)
      }
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
    }
  }
</script>

<style lang="less">
  @import '../style/index.less';
  @import './style/index.less';
</style>