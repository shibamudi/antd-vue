<template>
  <div class="alert">
    <markdown file="components/alert/index.md"></markdown>

    <div class="demo alert-basic">
      <div class="example">
        <avAlert type="success">Success Text</avAlert>
      </div>
      <markdown file="components/alert/demo/basic.md"></markdown>
    </div>

    <div class="demo alert-style">
      <div class="example">
        <avAlert type="success">Success Text</avAlert>
        <avAlert type="info">Info Text</avAlert>
        <avAlert type="warning">Warning Text</avAlert>
        <avAlert type="error">Error Text</avAlert>
      </div>
      <markdown file="components/alert/demo/style.md"></markdown>
    </div>

    <div class="demo alert-closable">
      <div class="example">
        <avAlert type="warning" closable>
          Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text
        </avAlert>
        <avAlert type="error" closable>
          Error Text
          <span slot="description">Error Description Error Description Error Description Error Description Error Description Error Description</span>
        </avAlert>
      </div>
      <markdown file="components/alert/demo/closable.md"></markdown>
    </div>

    <div class="demo alert-description">
      <div class="example">
        <avAlert type="success">
          Success Text
          <span slot="description">Success Description Success Description Success Description</span>
        </avAlert>
        <avAlert type="info">
          Info Text
          <span slot="description">Info Description Info Description Info Description Info Description</span>
        </avAlert>
        <avAlert type="warning">
          Warning Text
          <span slot="description">Warning Description Warning Description Warning Description Warning Description</span>
        </avAlert>
        <avAlert type="error">
          Error Text
          <span slot="description">Error Description Error Description Error Description Error Description</span>
        </avAlert>
      </div>
      <markdown file="components/alert/demo/description.md"></markdown>
    </div>

    <div class="demo alert-icon">
      <div class="example">
        <avAlert type="success" showIcon>Success Tips</avAlert>
        <avAlert type="info" showIcon>Informational Notes</avAlert>
        <avAlert type="warning" showIcon>Warning</avAlert>
        <avAlert type="error" showIcon>Error</avAlert>
        <avAlert type="success" showIcon>
          Success Tips
          <span slot="description">Detailed description and advices about successful copywriting.</span>
        </avAlert>
        <avAlert type="info" showIcon>
          Informational Notes
          <span slot="description">Additional description and informations about copywriting.</span>
        </avAlert>
        <avAlert type="warning" showIcon>
          Warning
          <span slot="description">This is a warning notice about copywriting.</span>
        </avAlert>
        <avAlert type="error" showIcon>
          Error
          <span slot="description">his is an error message about copywriting.</span>
        </avAlert>
      </div>
      <markdown file="components/alert/demo/icon.md"></markdown>
    </div>

    <div class="demo alert-close-text">
      <div class="example">
        <avAlert type="info">
          Info Text
          <span slot="closeText">Close Now</span>
        </avAlert>
      </div>
      <markdown file="components/alert/demo/close-text.md"></markdown>
    </div>

    <div class="demo alert-banner">
      <div class="example">
        <avAlert banner>Warning text</avAlert>
        <br>
        <avAlert banner closable>Very long warning text warning text text text text text text text</avAlert>
      </div>
      <markdown file="components/alert/demo/banner.md"></markdown>
    </div>
  </div>
</template>

<script>
  import Markdown from '../components/Markdown.vue'
  import { avAlert } from '../../components'

  export default {
    name: 'alert',
    components: {
      avAlert,
      Markdown
    }
  }
</script>