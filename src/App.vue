<template>
  <div id="app">
    <div class="header">
      <h1><av-icon type="github"></av-icon> Antd-Vue</h1>
    </div>
    <div class="menu">
      <ul>
        <li><router-link to="/">Home 首页</router-link></li>

        <li class="subtitle">General</li>
        <li><router-link to="/button">Button 按钮</router-link></li>
        <li><router-link to="/icon">Icon 图标</router-link></li>

        <li class="subtitle">Layout</li>
        <li><router-link to="/grid">Grid 栅格</router-link></li>

        <li class="subtitle">Feedback</li>
        <li><router-link to="/alert">Alert 警告提示</router-link></li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { avIcon } from '../components'

  export default {
    name: 'app',
    components: {
      avIcon
    }
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    width: 100%;
    height: 100%;
    color: #2c3e50;
    margin: 0;
    overflow-y: auto;
  }
  .header {
    width: 100%;
    height: 56px;
    background-color: cornflowerblue;
    color: white;
    text-align: center;
    line-height: 56px;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .menu {
    width: 200px;
    height: calc(100% - 56px);
    padding-top: 20px;
    background: white;
    border-right: 1px solid #e0e0e0;
    float: left;
    overflow-y: auto;
    position: fixed;
    top: 56px;
    left: 0;
    z-index: 100;
  }
  .menu li {
    font-size: 16px;
    line-height: 28px;
    margin: 5px 5px 5px 20px;
  }
  .menu li.subtitle {
    font-size: 14px;
    line-height: 16px;
    margin: 20px 0 0 10px;
  }
  .main {
    margin: 56px 0 0 200px;
    padding: 15px;
  }
  .demo {
    width: 100%;
    margin: 20px 0;
    background-color: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
  }
  .demo .example {
    padding: 42px 20px 50px;
    border-bottom: 1px dashed #e9e9e9;
  }
  .demo .markdown-body {
    padding: 20px;
    position: relative;
  }
  .demo .markdown-body h3 {
    position: absolute;
    top: -14px;
    padding: 1px 8px;
    margin-left: -8px;
    background: #fff;
  }
</style>
