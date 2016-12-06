<template>
  <div class="grid">
    <markdown file="components/grid/index.md"></markdown>
  </div>
</template>

<script>
  import markdown from '../components/Markdown.vue'

  export default {
    name: 'grid',
    components: { markdown }
  }
</script>