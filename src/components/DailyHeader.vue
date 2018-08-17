<template>
  <div id="zhihuheader">
    <header class="header">
      <nav class="inner">
        <router-link to="/">知乎日报</router-link>
        <router-link to="/daily">今日热闻</router-link>
        <router-link to="/theme">专题</router-link>
        <a class="github" href="https://github.com/zurhan/vue-zhihu-daily" target="_blank">Built with Vue.js by Zurhan</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.header {
  background-color: #0022ff
}
</style>
