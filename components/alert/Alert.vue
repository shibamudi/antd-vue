<template>
  <transition name="ant-alert-slide-up">
    <div
      :class="classes"
      v-if="!closed"
    >
      <av-icon
        className="ant-alert-icon"
        :type="iconClass"
        v-if="isShowIcon"></av-icon>
      <span class="ant-alert-message">
        <slot></slot>
      </span>
      <span class="ant-alert-description">
        <slot name="description"></slot>
      </span>
      <a
        class="ant-alert-close-icon"
        @click="handleClose"
        v-if="isClosable"
      >
        <slot name="closeText">
          <av-icon type="cross"></av-icon>
        </slot>
      </a>
    </div>
  </transition>
</template>

<script>
  import avIcon from '../icon'
  import {oneOf} from '../_utils/assist'

  const prefixCls = 'ant-alert'

  export default {
    name: 'av-alert',
    components: {avIcon},
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['success', 'info', 'warning', 'error'])
        },
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: false
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      banner: {
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
        closed: false,
        isShowIcon: this.showIcon || this.banner, /* banner模式默认有 Icon */
        isType: this.banner ? 'warning' : this.type /* banner模式默认为警告 */
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.isType}`,
          {
            [`${prefixCls}-with-description`]: this.$slots.description,
            [`${prefixCls}-no-icon`]: !this.isShowIcon,
            [`${prefixCls}-banner`]: this.banner
          },
          this.className
        ]
      },
      iconClass () {
        let iconClass = ''
        switch (this.isType) {
          case 'success':
            iconClass = 'check-circle'
            break
          case 'info':
            iconClass = 'info-circle'
            break
          case 'warning':
            iconClass = 'exclamation-circle'
            break
          case 'error':
            iconClass = 'cross-circle'
            break
        }
        if (this.$slots.description) {
          iconClass += '-o'
        }
        return iconClass
      },
      isClosable () {
        return this.closable || this.$slots.closeText
      }
    },
    methods: {
      handleClose: function () {
        this.closed = true
        this.$emit('onClose')
      }
    }
  }
</script>

<style lang="less">
  @import "../style/index.less";
  @import "style/index.less";
</style>