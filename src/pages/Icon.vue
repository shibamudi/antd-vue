<template>
  <div class="icon">
    <markdown file="components/icon/index.md"></markdown>
  </div>
</template>

<script>
  import { avIcon } from '../../components'
  import markdown from '../components/Markdown.vue'

  export default {
    name: 'icon',
    components: { avIcon, markdown }
  }
</script>