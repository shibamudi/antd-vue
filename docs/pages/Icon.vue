<template>
  <div class="icon">
    <markdown file="docs/components/icon/index.md"></markdown>
  </div>
</template>

<script>
  import Markdown from '../components/Markdown.vue'
  import { avIcon } from '../../components'

  export default {
    name: 'icon',
    components: { Markdown, avIcon }
  }
</script>