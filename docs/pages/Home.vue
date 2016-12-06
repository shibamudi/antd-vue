<template>
  <div class="home">
    <markdown file="README.md"></markdown>
  </div>
</template>

<script>
  import Markdown from '../components/Markdown.vue'

  export default {
    name: 'home',
    components: { Markdown }
  }
</script>