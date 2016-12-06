<template>
  <i class="anticon" :class="['anticon-'+type, {'anticon-spin': isSpin}, className]" />
</template>

<script>
  export default {
    name: 'av-icon',
    props: {
      type: {
        type: String,
        required: true
      },
      spin: {
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
        isSpin: this.spin || this.type === 'loading'
      }
    }
  }
</script>

<style lang="less">
  @import "../style/index.less";
</style>