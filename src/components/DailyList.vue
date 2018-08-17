<template>
<div id="DailyList">
  <div class="news-list">
  <div class="box">
    <a>gasdfa</a>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      stories: []
    }
  }
}
</script>

<style>
.box {
  max-width: 30px;
  max-height: 60px;
}
.box .a {
  text-align: center
}
.news-list, .news-list-nav {
    background-color: #fff;
    border-radius: 2px
}
.news-list {
    position: absolute;
    margin: 30px 0;
    width: 100%;
    -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
    -o-transition: all .5s cubic-bezier(.55, 0, .1, 1);
    transition: all .5s cubic-bezier(.55, 0, .1, 1)
}
.news-item {
    background-color: #fff;
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 60px
}
</style>
