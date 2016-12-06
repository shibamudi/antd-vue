<template>
  <div class="home">
    <markdown file="README.md"></markdown>
  </div>
</template>

<script>
  import markdown from '../components/Markdown.vue'

  export default {
    name: 'home',
    components: { markdown }
  }
</script>