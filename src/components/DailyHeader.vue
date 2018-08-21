<template>
  <div id="zhihuheader">
    <header class="header">
      <nav class="inner">
        <a style="font-size: 30px;">知乎日报</a>
        <router-link to="/list">今日热闻</router-link>
        <router-link to="/subject">专题</router-link>
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

<style scoped>
body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
    background-color: #f2f3f5;
    margin: 0;
    padding-top: 0px;
    overflow-y: scroll
}

a, body {
    color: #34495e
}

a {
    text-decoration: none
}

.header {
    background-color:#2a2935;
    position: fixed;
    z-index: 999;
    height: 60px;
    top: 0;
    left: 0;
    right: 0
}

.header .inner {
    max-width: 900px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    height: 60px;
    padding: 15px 5px
}

.header a {
    color: hsla(0, 0%, 100%, .8);
    line-height: 24px;
    -webkit-transition: color .15s ease;
    -o-transition: color .15s ease;
    transition: color .15s ease;
    display: inline-block;
    vertical-align: middle;
    font-weight: 300;
    letter-spacing: .075em;
    margin-right: 1.8em
}

.header a:hover {
    color: #fff
}

.header a.router-link-active {
    color: #fff;
    font-weight: 400
}

.header a:nth-child(6) {
    margin-right: 0
}

.header .github {
    color: #fff;
    font-size: .9em;
    margin: 0;
    vertical-align: middle;
    float: right
}

.logo {
    width: 24px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle
}

.view {
    max-width: 800px;
    margin: 0 auto;
    position: relative
}

.fade-enter-active, .fade-leave-active {
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.fade-enter, .fade-leave-active {
    opacity: 0
}

@media (max-width:860px) {
    .header .inner {
        padding: 15px 30px
    }

}

@media (max-width:600px) {
    .header .inner {
        padding: 15px
    }

    .header a {
        margin-right: 1em
    }

    .header .github {
        display: none
    }

}

.progress[data-v-5865e346] {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0;
    -webkit-transition: width .2s, opacity .4s;
    -o-transition: width .2s, opacity .4s;
    transition: width .2s, opacity .4s;
    opacity: 1;
    background-color: #efc14e;
    z-index: 999999
}
</style>
